import React from "react"
import { graphql } from "gatsby"
import { Helmet } from 'react-helmet'

import Layout from '../components/layout2'
import Hero from '../components/hero'
import CardOne from '../components/cardOne'
import CardTwo from '../components/cardTwo'
import Review from '../components/review'




import stars from '../images/stars.png'
import avatar from '../images/Avatar.png'

// eslint-disable-next-line
export const IndexPageTemplate = ({   
  headingOne,
  subheadingOne,
  heroButtonCtaOne,
  heroButtonCtaTwo, 
  heroButtonLinkOne, 
  image,
  headingTwo, 
  headingThree,
  headingFour,
  cards,
  dependancies, 
  reviews,
  helmet

}) => {
 
  return (

    <div >
     {helmet || ""}

      <Hero
          headingOne={headingOne}
          subheadingOne={subheadingOne}
          heroButtonCtaOne={heroButtonCtaOne}
          heroImage={image}
          heroButtonCtaTwo={heroButtonCtaTwo}
          heroButtonLinkOne={heroButtonLinkOne}
        />
        <section className="vertical-padding align-center" >

          <div>
            <h2>{headingTwo}</h2>
          
            <div className="flex center gap-1em">

              {cards.map((item) => (

                <CardOne
                  title={item.title}
                  desc={item.desc}
                  icon={item.icon.childImageSharp.gatsbyImageData}
                  alt={item.alt}
                  type="cardOne"
                />

              ))}
            </div>
          </div>
        </section>

        <div className="vertical-padding">
          <h2>{headingThree}</h2>
          <div className="flex center card-container gap-1em">
            {dependancies.map((item) => (

              <CardTwo
                title={item.title}
                desc={item.desc}
                icon={item.icon.childImageSharp.gatsbyImageData}
                alt= {item.alt}
                type="cardTwo"
              />

            ))}
          </div>
        </div>

        <section className="vertical-padding">
          <h2>{headingFour}</h2>
          <div className="alt-background center h-pad-10" style={{overflow: "hidden"}}>
            <div className="flex ">
            {reviews.map((item) => (

<Review
  name={item.name}
  desc={item.desc}
  stars={stars}
  avatar={avatar}
/>

))}
          
          
            </div>
          </div>
        </section>


   



    </div>
  )
}

const IndexPage = ({ data }) => {
  const home = data.markdownRemark;
  const h = home.frontmatter;
 
  return (

    <Layout>
      <IndexPageTemplate
          headingOne = {h.headingOne}
          subheadingOne = {h.subheadingOne}
          heroButtonCtaOne = {h.heroButtonCtaOne}
          heroButtonCtaTwo = {h.heroButtonCtaTwo}
          heroButtonLinkOne = {h.heroButtonLinkOne}
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
    </Layout>
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