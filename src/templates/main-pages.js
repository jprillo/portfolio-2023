import React from "react"
import { graphql } from "gatsby"
import { Helmet } from 'react-helmet'
import Layout from '../components/layout2.js'

import "../style/main.scss"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    
      <div>
        <Layout>
        <Helmet title={post.frontmatter.title} defer={false} />
        <div className="pad-top" >
          <div className="flex">
        <div className="page-container col-9" >
        <h1 className="center" >{post.frontmatter.title}</h1>
   
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
       </div>
       <div className="col-3">
test
       </div>
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
   
      }
    }
  }
`