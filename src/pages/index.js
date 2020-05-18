import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout";
import "./index.css"



const IndexPage = ({data}) => (
    <div>
        <Layout>
            <h1> Today's Question: </h1>
            <h1> {data.file.childMarkdownRemark.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: data.file.childMarkdownRemark.html}} />
            <br></br>
            <Link to={data.file.childMarkdownRemark.frontmatter.answer} className="linkToAnswer">See Answer and Explanation</Link>

        </Layout>
    </div>

);

export default IndexPage

 export const query =  graphql`
{  
    file(relativePath: {eq: "questions/shiftLinkedList.md"}){
    relativePath
   childMarkdownRemark{
    html
    frontmatter{
        title
        answer
      }
  }
  }
  
}
  `

