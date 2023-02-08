import React from "react"
import { graphql } from "gatsby"
import { Helmet } from 'react-helmet'
import Layout from '../components/layout2.js'

import "../style/main.scss"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <div className="h-pad" style={{background: post.frontmatter.color}} >
        <Layout>
        <Helmet title={post.frontmatter.title} defer={false} />
 
          <div className="flex pad-top">
        <div className="page-container col-9" >
        <h1 className="center" >{post.frontmatter.title}</h1>
   
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
       </div>
       <div className="col-3">
test
       </div>
       </div>
      
        </Layout>
      </div>
  
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        color
   
      }
    }
  }
`