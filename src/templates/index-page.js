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
    <div className="v-pad h-pad" style={{background: "#2E00B0", overflowX: "hidden"}}>
    <img className='projects-image' width= "100%" src={projects} alt="this is a hero" />
    <div >

      <div className="v-pad gap-1" style={{display: "flex", flexDirection: "column" }}>
      {webprojects.slice(2, 4).map((item) => (
              <FeaturedWebsite
              title={item.node.frontmatter.title}
              description1={item.node.frontmatter.description}
              description2={item.node.frontmatter.description2}
              link={item.node.fields.slug}
              link3={item.node.frontmatter.link2}
              link2={item.node.frontmatter.link3}
              image={item.node.frontmatter.featuredImage.publicURL}
             />


))}


    <div style={{textAlign: 'center', width: "100%", display: "flex", justifyContent: "center", marginTop: "-2px"}}>

      <Button cta="See Them All" link="/web-development" type="primary sm" icon={arrow}  />
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

      <Button cta="See Them All" link="/graphic-design" type="primary sm" icon={arrow}  />
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
            <Helmet titleTemplate="%s | Jason Prillo Web Development">
            <title>Web Developer and Graphic Artist in Melbourne, FL</title>
            <meta name="description"  content="Discover the Creative World of Jason Prillo, a Talented Web Developer and Graphic Artist Based in Melbourne, Florida. Explore Unique Web Designs, Striking Vector Art, and Engage with His Diverse Portfolio."/>
            <meta name="keywords" content="web development palm bay florida business web based software development melbourne fl" />
            <meta property="og:title" content={h.headingOne} />
            <meta property="og:description" content="Jason Prillo is a web developer and graphic artist from Palm Bay, Florida." />
            <meta property="og:image" content={h.heroImage.publicURL} />
            <meta property="og:type" content="article" />
            <meta property="og:locale" content="en_US" />
            <meta property="og:site_name" content="Jason Prillo Web Development" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={h.headingOne} />
            <meta name="twitter:description" content="Discover the Creative World of Jason Prillo, a Talented Web Developer and Graphic Artist Based in Melbourne, Florida. Explore Unique Web Designs, Striking Vector Art, and Engage with His Diverse Portfolio."/>
            <meta name="twitter:image" content={h.heroImage.publicURL} />
            <script type="application/ld+json">
            {`
              {
                "@context": "https://schema.org",
                "@type": "Article",
                "headline": "${h.headingOne}",
                "description": "Discover the Creative World of Jason Prillo, a Talented Web Developer and Graphic Artist Based in Melbourne, Florida. Explore Unique Web Designs, Striking Vector Art, and Engage with His Diverse Portfolio.",
                "image": "${h.heroImage.publicURL}",
                "author": {
                  "@type": "Person",
                  "name": "Jason Prillo"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "Jason Prillo Web Development",

                },

              }
            `}
          </script>
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
            description2
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