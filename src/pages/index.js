import React from "react"
import { graphql, Link } from "gatsby"


const IndexPage = ({data}) => (
    <div>
    <h> Welcome to daily question</h>
    <ul>
        {data.allFile.edges.map(({node}) => (
            <li key={node.name}>
                <Link to={node.name}> {node.childMarkdownRemark.frontmatter.title}</Link>
            </li>
        ))}
    </ul>
    </div>


);

export default IndexPage

 export const query =  graphql`
  {
  allFile {
    edges {
      node {
        relativePath
        name
        childMarkdownRemark {
            frontmatter {
                title
            }
        }
      }
    }
  }
}
  `