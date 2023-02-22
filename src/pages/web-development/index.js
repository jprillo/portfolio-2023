import React from "react"
import Layout from '../../components/layout2'
import { graphql} from "gatsby"
import { Helmet } from 'react-helmet'

import BlogArticle from '../../components/blogArticleOne'


export default function Code({data}) {
    const d = data.allMarkdownRemark;
    const h = d.edges[0].node.frontmatter
    const hslug = d.edges[0].node.fields.slug
    const f = d.edges[1].node.frontmatter
    const fslug = d.edges[1].node.fields.slug
    const t = d.edges[2].node.frontmatter
    const tslug = d.edges[2].node.fields.slug
    const htag = h.tags[0]
    const otherPosts = d.edges.slice(3)

 
    
  return <div >
      <Helmet>
        <title>Web Development | Jason prillo</title>
        <meta name="description" content="These are some of my latest projects." />
        <meta name="theme-color" content="red" />
      </Helmet>
     
<div className=" h-pad  " style={{background: "darkblue"}}>
<Layout>
  <div className="pad-top center">
<h1 className="center">Web Development Projects</h1>
    <p>This is some of my latest projects. I have only included things I ethier own or have eplicit permission to use.</p>
    </div>
  <div className="flex v-pad gap-2">
 
    <div className="col-8">
      <BlogArticle
      width = ""
      type = "feature"
      slug = {hslug}
      tag = {htag}
      title = {h.title}
      description = {h.description}
      featuredImage = {h.featuredImage.publicURL}
      />
      <div className="column v-pad-5">
        <div className="flex wrap gap-2">
        {otherPosts.map((item) => (
  <BlogArticle
  width = "nnn"
  type = "normal"
  slug = {item.node.fields.slug}
  tag = {item.node.frontmatter.tags[0]}
  title = {item.node.frontmatter.title}
  description = {item.node.frontmatter.description}
  featuredImage = {item.node.frontmatter.featuredImage.publicURL}
  />

))}
   
      </div>
    </div>
    </div>
    <div className="col-4 column gap-2">
    <BlogArticle
     width = ""
      type = "normal"
      slug = {fslug}
      tag = {f.tags[0]}
      title = {f.title}
      description = {f.description}
      featuredImage = {f.featuredImage.publicURL}
      />

<BlogArticle
    width = ""
      type = "normal"
      slug = {tslug}
      tag = {t.tags[0]}
      title = {t.title}
      description = {t.description}
      featuredImage = {t.featuredImage.publicURL}
      />
  
       
    </div>
    </div>
    </Layout>
</div>
 
  </div>
}


export const query = graphql`

query MyQuery {
      allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "web-project"}}}) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            description
            tags
            featuredImage {
                publicURL
             }
          }
        }
      }
    }
  }
`