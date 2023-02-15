import React from "react"
import { graphql } from "gatsby"
import { Helmet } from 'react-helmet'
import Layout from '../components/layout2.js'
import image from '../images/logo.png'

import "../style/main.scss"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <div className="h-pad" style={{background: post.frontmatter.color}} >
        <Layout>
        <Helmet title={post.frontmatter.title} defer={false} />
 
          <div className="flex gap-2 hero">
        <div className="page-container col-6" >
        <h1  >{post.frontmatter.title}</h1>
        <p className="subheading">This is a good subheading about myself</p>
   </div>
   <div className="col-6">
   <img width= "100%" src={image} alt="this is a hero" />
        </div>
       </div>
       <div className="flex">
       <div className="col-6">
       <div dangerouslySetInnerHTML={{ __html: post.html }} />
       </div>
       <div className="col-6">
       <div dangerouslySetInnerHTML={{ __html: post.html }} />
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