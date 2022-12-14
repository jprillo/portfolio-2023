import React from "react"
import Layout from '../../components/layout2'
import { graphql} from "gatsby"
import { Helmet } from 'react-helmet'

import BlogArticle from '../../components/blogArticleOne'


export default function Blog({data}) {
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
        <title>Geeby | Gatsby Starter Blog</title>
        <meta name="description" content="VYNTRADE was founded in 2018 to offer consulting to Wine & Spirit Industry Companies.​" />
        <meta name="theme-color" content="black" />
      </Helmet>
      <Layout>
<div className="flex gap-2 pad-top ">
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
}


export const query = graphql`

query MyQuery {
      allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "blog-post"}}}) {
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