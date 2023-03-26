import React from "react"
import Layout from '../../components/layout2'
import { graphql} from "gatsby"
import { Helmet } from 'react-helmet'

import FeaturedWebsite from '../../components/featured-website'


export default function Code({data}) {
    const d = data.allMarkdownRemark;

    const otherPosts = d.edges

 
    
  return <div >
      <Helmet>
        <title>Web Development | Jason prillo</title>
        <meta name="description" content="These are some of my latest projects." />
        <meta name="theme-color" content="red" />
      </Helmet>
     
<div  style={{background: "#202124"}}>
<Layout color="light-nav">
  <div className="pad-top center h-pad">
<h1 className="center">Web Development Projects</h1>
    <p>This is some of my latest projects. I have only included things I ethier own or have eplicit permission to use.</p>
    </div>
  <div className=" v-pad gap-2 h-pad">
 
    <div className="col-12">
  
      <div className="column v-pad-5">
        <div className="flex wrap gap-2">
        {otherPosts.map((item) => (
              <FeaturedWebsite
              title={item.node.frontmatter.title}
              description1={item.node.frontmatter.description}
              description2={item.node.frontmatter.description2}
              link={item.node.fields.slug}
              link2={item.node.frontmatter.link3}
              link3={item.node.frontmatter.link2}
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
            description2
            link3
            link2
            featuredImage {
                publicURL
             }
          }
        }
      }
    }
  }
`