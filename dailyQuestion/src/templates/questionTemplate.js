import React from "react"
import { graphql } from "gatsby"


const Question = ({data}) => (
    <div>
        <h1> {data.file.childMarkdownRemark.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.file.childMarkdownRemark.html}} />
    </div>

)

export const pageQuery = graphql`
query($relativePath: String){
  file(relativePath: {eq: $relativePath}){
   childMarkdownRemark{
    	html
  		frontmatter{
        title
      }
  	}
  }
}
`

export default Question