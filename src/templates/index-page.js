import React from "react"
import {useEffect, useState} from 'react'
import { graphql } from "gatsby"
import { Helmet } from 'react-helmet'
import cloudtop from '../images/cloudbottom.png'

import Preloader from '../components/preloader'

import "../style/main.scss"
import FeaturedWebsite from '../components/featured-website'


import Hero from '../components/hero'
import projects from '../images/projects.png'
import CardOne from '../components/cardOne'
import Button from '../components/button'
import arrow from '../images/arrow.png'
import hills from '../images/hills.png'
import geeby from '../images/geeby.png'
import vyn from '../images/Vyntrade.png'
import video from '../images/intro-video.mp4'

import letter from '../images/letter.png'

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
 
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
      setTimeout(() => {
        setIsLoaded(true);
      }, 2000);
    }, []);
  
  return (

    <div style={{position: "relative", overflowY: "hidden"}} >
     {helmet || ""}

     <Preloader isLoaded={isLoaded}
     />
    
  
      <Hero
          headingOne={headingOne}
          subheadingOne={subheadingOne}
          heroButtonCtaOne={heroButtonCtaOne}
          heroImage={image}
          heroButtonCtaTwo={heroButtonCtaTwo}
          heroButtonLinkOne={heroButtonLinkOne}
          heroButtonLinkTwo={heroButtonLinkTwo}
          
        />
<section className="flex cloud v-pad h-pad gap-1" style={{width: "100%",  overflowY: "hidden", background: "white", alignItems: "center"}}>
          <div className="col-6" >
          <video controls width="100%" style={{ border: "solid black 5px"}}>
      
      <source src={video} type="video/mp4" 
      />
      Sorry, your browser doesn't support videos.
    </video>
          </div>
          <div className="col-6"  >
          <h2 style={{color: "black", padding: 0, marginTop: 0}}>Meet Mr. Prillo</h2>
              <p style={{color: "black"}}>
              Hello there, my name is Jason Prillo. I am a web developer and digtal artist based in Central Florida. I started Formal Flamingo Web Design in 2016 and specialize in making unique websites. </p><br/>
             
              <div className="button-container">
                <div className="col-5">        
                    <Button
                    type="secondary sm"
                    cta= "More Me"
                    link= "/"
                    icon = {arrow}
                   
                    />
                
                </div>       
                <div className="col-6 "> 
                <Button
                    type="primary sm"
                    cta= "Resume"
                    link= "/"
                    icon = {letter}
                    />
                   
                </div>
       
            </div>
            </div>

        </section>
<div style={{background: "#0000ff"}}>
<img style={{verticalAlign: "top"}} width= "100%" src={cloudtop} alt="this is the top of the clouds" />
</div>
    <div className="v-pad h-pad" style={{background: "linear-gradient(180deg, #0000FF 5.62%, #3744EA 68.68%, #487FE9 96.84%)"}}>
    <img width= "100%" src={projects} alt="this is a hero" />
    <div >
      <div className="v-pad gap-1" style={{display: "flex", flexDirection: "column" }}>
      <FeaturedWebsite
      title="Geeby"
      description="geeby is"
      image={geeby}
      />
    <FeaturedWebsite
     title="VynTrade"
     description="Vyntrade is"
     image={vyn}
    />
   
    <div style={{textAlign: 'center', width: "100%", display: "flex", justifyContent: "center", marginTop: "-2px"}}>
      
      <Button cta="See Them All" link="/instructions" type="primary" icon={arrow}  />
      </div>

      </div>


 

  
    </div> 
    </div>
    <div style={{background: "#0000ff"}}>
<img style={{verticalAlign: "top"}} width= "100%" src={hills} alt="these are hills" />
</div>
    <div className="h-pad gap-2" style={{display: "flex", flexDirection: "column", background: "#2f9733"}}>
    <div  style={{  display: "flex",  gap: "3vw"}}>
<CardOne title="Beatrice Boner"  />
<CardOne title="title"  />
<CardOne title="title"  />
<CardOne title="title" />
</div>
<div  style={{ display: "flex" ,  gap: "3vw"}}>
<CardOne title="title"  />
<CardOne title="title"  />
<CardOne title="title"  />
<CardOne title="title"  />
</div>

<Button cta="Let's Go" link="google.com" type="primary" icon={arrow} />
</div>

<div style={{background: "#181302", height: "50vh"}}>

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