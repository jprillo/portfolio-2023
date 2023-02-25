import React from "react"
import Layout from '../../components/layout2'
import { graphql} from "gatsby"
import { Helmet } from 'react-helmet'

import FeaturedWebsite from '../../components/featured-website'
import BlogArticle from '../../components/blogArticleOne'
import vyn from '../../images/Vyntrade.png'

export default function Code({data}) {
    const d = data.allMarkdownRemark;
    const h = d.edges[0].node.frontmatter
    const hslug = d.edges[0].node.fields.slug
    const f = d.edges[1].node.frontmatter
    const fslug = d.edges[1].node.fields.slug
    const t = d.edges[2].node.frontmatter
    const tslug = d.edges[2].node.fields.slug
    const otherPosts = d.edges

 
    
  return <div >
      <Helmet>
        <title>Web Development | Jason prillo</title>
        <meta name="description" content="These are some of my latest projects." />
        <meta name="theme-color" content="red" />
      </Helmet>
     
<div className=" h-pad  " style={{background: "#2f034c"}}>
<Layout>
  <div className="pad-top center">
<h1 className="center">Web Development Projects</h1>
    <p>This is some of my latest projects. I have only included things I ethier own or have eplicit permission to use.</p>
    </div>
  <div className=" v-pad gap-2">
 
    <div className="col-12">
  
      <div className="column v-pad-5">
        <div className="flex wrap gap-2">
        {otherPosts.map((item) => (
              <FeaturedWebsite
              title={item.node.frontmatter.title}
              description1="Real wine company is a real wine company who's name I am not putting in my content because I do not want to show up in searchs for them and it is easy to find them because I made thier website.  "
              description2="I will leave the link so you can check them out though.  "
              link={item.node.fields.slug}
              image={item.node.frontmatter.featuredImage.publicURL}
             />


))}
   
      </div>
    </div>
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