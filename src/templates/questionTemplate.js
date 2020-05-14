import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout";
import "./questionTemplate.css"


const Question = ({data}) => (
        <div>
            <Layout>
                <h1> {data.file.childMarkdownRemark.frontmatter.date}'s Question </h1>
                <h1> {data.file.childMarkdownRemark.frontmatter.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: data.file.childMarkdownRemark.html}} />
                <br></br>
                <Link to={data.file.childMarkdownRemark.frontmatter.answer} className="linkToAnswer">See Answer and Explanation</Link>
            </Layout>
        </div>
)

export const pageQuery = graphql`
query($relativePath: String){
  file(relativePath: {eq: $relativePath}){
      relativePath
   childMarkdownRemark{
    	html
  		frontmatter{
        title
        answer
        date
      }
  	}
  }
}
`

export default Question