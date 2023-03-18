import React from 'react'
import { graphql } from "gatsby"
import { Helmet } from 'react-helmet'
import "../style/main.scss"

import cloudtop from '../images/cloudbottom.png'
import projects from '../images/projects.png'

import Button from '../components/button'
import arrow from '../images/arrow.png'
import hills from '../images/hill.png'

import video from '../images/intro-video.mp4'
import letter from '../images/letter.png'

import Preloader from '../components/preloader'
import { Clouds } from '../components/clouds';
import FeaturedWebsite from '../components/featured-website'
import Hero from '../components/hero'
import ArtLinks from '../components/ArtLinks/index'
import Footer from '../components/footer'




// eslint-disable-next-line
export const IndexPageTemplate = ({   
  headingOne,
  subheadingOne,
  heroButtonCtaOne,
  heroButtonCtaTwo, 
  heroButtonLinkOne,
  heroButtonLinkTwo,
  image,
  helmet, 
  webprojects

}) => {
 
 
  
  return (

    <div style={{position: "relative", overflowY: "hidden"}} >
     {helmet || ""}

     <Preloader/>
    
 
      <Hero
          headingOne={headingOne}
          subheadingOne={subheadingOne}
          heroButtonCtaOne={heroButtonCtaOne}
          heroImage={image}
          heroButtonCtaTwo={heroButtonCtaTwo}
          heroButtonLinkOne={heroButtonLinkOne}
          heroButtonLinkTwo={heroButtonLinkTwo}
          
        />
     
<Clouds   video={video} arrow={arrow} letter={letter}  />
<div style={{background: "#2E00B0"}}>
<img style={{verticalAlign: "top"}} width= "100%" src={cloudtop} alt="this is the top of the clouds" />
</div>
    <div className="v-pad h-pad" style={{background: "#2E00B0"}}>
    <img width= "100%" src={projects} alt="this is a hero" />
    <div >
     
      <div className="v-pad gap-1" style={{display: "flex", flexDirection: "column" }}>
      {webprojects.slice(2, 4).map((item) => (
              <FeaturedWebsite
              title={item.node.frontmatter.title}
              description1="Real wine company is a real wine company who's name I am not putting in my content because I do not want to show up in searchs for them and it is easy to find them because I made thier website.  "
              description2="I will leave the link so you can check them out though.  "
              link={item.node.fields.slug}
              link3={item.node.frontmatter.link2}
              link2={item.node.frontmatter.link3}
              image={item.node.frontmatter.featuredImage.publicURL}
             />


))}

   
    <div style={{textAlign: 'center', width: "100%", display: "flex", justifyContent: "center", marginTop: "-2px"}}>
      
      <Button cta="See Them All" link="/code" type="primary sm" icon={arrow}  />
      </div>

      </div>


 

  
    </div> 
    </div>
    <div style={{background: "#2E00B0 "}}>
<img style={{verticalAlign: "top"}} width= "100%" src={hills} alt="these are hills" />
</div>
    <div className="h-pad gap-2 b-pad" style={{ background: "#2f9733"}}>
    
<ArtLinks/>
<div style={{textAlign: 'center', width: "100%", display: "flex", justifyContent: "center", marginTop: "-2px"}}>
      
      <Button cta="See Them All" link="/code" type="primary sm" icon={arrow}  />
      </div>

</div>

<div style={{background: "#181302"}}>
<Footer color="dark-nav"/>

</div>
    
      



    


   


</div>
    
  )
}

const IndexPage = ({ data }) => {
  const home = data.index;
  const h = home.frontmatter;
  const p = data.projects;
  const webprojects = p.edges
 
  return (

   
      <IndexPageTemplate
          headingOne = {h.headingOne}
          subheadingOne = {h.subheadingOne}
          heroButtonCtaOne = {h.heroButtonCtaOne}
          heroButtonCtaTwo = {h.heroButtonCtaTwo}
          heroButtonLinkOne = {h.heroButtonLinkOne}
          heroButtonLinkTwo = {h.heroButtonLinkTwo}
          image = {h.heroImage.publicURL}
          headingTwo = {h.headingTwo} 
          headingThree = {h.headingThree}
          headingFour = {h.headingFour} 
          webprojects = {webprojects}
          helmet = {
            <Helmet titleTemplate="%s | Blog">
            <title>{`${h.headingOne}`}</title>
            <meta
              name="description"
              content={`${h.subheadingOne}`}
            />
          </Helmet>
          }

      />

  )
}

export default IndexPage;








export const query = graphql`
  query($slug: String!) {
  index:  markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {        
        headingOne
        subheadingOne
        heroButtonCtaOne
        heroButtonCtaTwo
        heroButtonLinkOne
        heroButtonLinkTwo
        heroImage {
          publicURL
        }
        headingTwo
        headingThree
        headingFour
    
        
   
      }
    }

   projects: allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "web-project"}}}) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            description
            featuredImage{
              publicURL
            }
            link2
            link3
          }
        }
      }
    }
  }
`