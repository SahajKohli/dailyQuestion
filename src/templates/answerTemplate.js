import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout";



const Question = ({data}) => (
    <div>
        <Layout>
            <h1> {data.file.childMarkdownRemark.frontmatter.date}'s Answer </h1>
            <h1> {data.file.childMarkdownRemark.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: data.file.childMarkdownRemark.html}} />
            <br></br>
            <Link to={data.file.relativePath} className="linkToAnswer">Back to Question</Link>
        </Layout>
    </div>
)

export const pageQuery = graphql`
query($relativePath: String){
  file(relativePath: {eq: $relativePath}){
   childMarkdownRemark{
    	html
  		frontmatter{
            title
            question
            date
      }
  	}
  }
}
`

export default Question