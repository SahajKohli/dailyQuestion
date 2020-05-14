import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import "./sideNav.css"

export default function SideNav() {
    return (
        <StaticQuery
            query={graphql`
  {
  allFile(filter: {relativeDirectory: {eq: "questions"}}) {
    edges {
      node {
        name
        relativePath
        relativeDirectory
        childMarkdownRemark{
            frontmatter{
                title
            }
        }
      }
    }
  }}
      `}
            render={data => (
                <div className="sideNav">
                    <h3>Past Questions:</h3>
                    <ul className="oldQuestions">
                        {data.allFile.edges.map(({node}) => (
                            <li key={node.name}>
                                <Link to={node.name}> {node.childMarkdownRemark.frontmatter.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        />
    )
}
