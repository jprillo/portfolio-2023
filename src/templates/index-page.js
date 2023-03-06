import React from 'react'
import { graphql } from "gatsby"
import { Helmet } from 'react-helmet'
import "../style/main.scss"

import cloudtop from '../images/cloudbottom.png'
import projects from '../images/projects.png'

import Button from '../components/button'
import arrow from '../images/arrow.png'
import hills from '../images/hill.png'
import geeby from '../images/geeby.png'
import vyn from '../images/Vyntrade.png'
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
  helmet

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
      <FeaturedWebsite
      title="Geeby"
      description1="Geeby is a starter template for Gatsby.js, a popular web development framework, that enables you to utilize Netlify for content management. By using Geeby, you can create a static website that allows your client to make changes without needing to contact you. "
     
      description2="Beware though, the code does release a blood thirsty purple monster."
      image={geeby}
      link="/web-development/geeby"
      />
    <FeaturedWebsite
     title="Real Wine Company"
     description1="Real wine company is a real wine company who's name I am not putting in my content because I do not want to show up in searchs for them and it is easy to find them because I made thier website.  "
     description2="I will leave the link so you can check them out though.  "
     link="/web-development/wine-company"
     image={vyn}
    />
   
    <div style={{textAlign: 'center', width: "100%", display: "flex", justifyContent: "center", marginTop: "-2px"}}>
      
      <Button cta="See Them All" link="/code" type="primary sm" icon={arrow}  />
      </div>

      </div>


 

  
    </div> 
    </div>
    <div style={{background: "#2E00B0 "}}>
<img style={{verticalAlign: "top"}} width= "100%" src={hills} alt="these are hills" />
</div>
    <div className="h-pad gap-2" style={{ background: "#2f9733"}}>

<ArtLinks/>
<Button cta="Let's Go" link="google.com" type="primary sm" icon={arrow} />
</div>

<div style={{background: "#181302"}}>
<Footer/>
</div>
    
      



    


   


</div>
    
  )
}

const IndexPage = ({ data }) => {
  const home = data.markdownRemark;
  const h = home.frontmatter;
 
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
          cards = {h.cards}
          dependancies = {h.dependancies} 
          reviews = {h.reviews}
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
    markdownRemark(fields: { slug: { eq: $slug } }) {
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
        cards{
          title
          icon {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, quality: 65)
            }
          }
          alt
          desc
        }
        dependancies{
          title
          icon {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, quality: 65)
            }
          }
          alt
          desc
        }
        reviews{
          name
          desc
        }
        
   
      }
    }
  }
`