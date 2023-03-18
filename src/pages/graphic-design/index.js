import React from "react"
import Layout from '../../components/layout2'
import { graphql} from "gatsby"
import { Helmet } from 'react-helmet'
import CardOne from '../../components/cardOne'

import animal from '../../images/art-images/animal.png'
import clown from '../../images/art-images/clown-family.png'
import dumbo from '../../images/art-images/cometh-dumbo.png'
import satan from '../../images/art-images/cometh-satan.png'
import dog from '../../images/art-images/dirty-old-dog.png'
import sun from '../../images/art-images/diva-sun.png'
import prison from '../../images/art-images/dudes-in-prison.png'
import sauron from '../../images/art-images/eye-of-saurananas.png'
import fed from '../../images/art-images/fed-smoker-tribute.png'
import frank from '../../images/art-images/frank.png'
import joker from '../../images/art-images/jokerizine.png'
import juice from '../../images/art-images/juice-bear.png'
import law from '../../images/art-images/lawyers.png'
import morty from '../../images/art-images/there-will-be-morty.png'
import yavo from '../../images/art-images/yavo.png'





import FeaturedWebsite from '../../components/featured-website'


export default function Code({data}) {
    const d = data.allMarkdownRemark;

    const otherPosts = d.edges

    const artcards = [
      {
        title: 'Animal',
        link: animal,
      },
      {
        title: 'Card 2',
        link: clown,
      },
      {
        title: 'Card 3',
        link: dumbo
      },
      {
        title: 'Card 3',
        link: satan
      },
      {
        title: 'Animal',
        link: dog,
      },
      {
        title: 'Card 2',
        link: prison,
      },
      {
        title: 'Animal',
        link: fed,
      },
      {
        title: 'Card 2',
        link: frank,
      },
      {
        title: 'Card 3',
        link: joker
      },
      {
        title: 'Card 3',
        link: juice
      },
      {
        title: 'Animal',
        link: law,
      },
      {
        title: 'Card 2',
        link: morty,
      },
      {
        title: 'Card 3',
        link: yavo 
      },
      {
        title: 'Card 3',
        link: sauron
      },
      {
        title: 'Animal',
        link: sun,
      },
    ];
    
  return <div >
      <Helmet>
        <title>Web Development | Jason prillo</title>
        <meta name="description" content="These are some of my latest projects." />
        <meta name="theme-color" content="red" />
      </Helmet>
     
<div style={{background: "#202124"}}>
<Layout>
  <div className="pad-top center">
<h1 className="center">Graphic Design & Art</h1>
    <p>This is some of my latest projects. I have only included things I ethier own or have eplicit permission to use.</p>
    </div>
  <div className=" v-pad gap-2 h-pad">
 
    <div className="col-12">
  
      <div className="column v-pad-5">
        <div >
        {artcards.map((card, index) => (
      <img width="45%" src={card.link}/>
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