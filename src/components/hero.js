import React from 'react'
import Button from './button.js'
import { GatsbyImage } from "gatsby-plugin-image"
import arrow from '../images/arrow.png'


export default function Hero(props) {

    return (
        <section className="hero flex">
        <div className="col-6" >
          <h1>{props.headingOne}</h1>      
          <p className="subheading">{props.subheadingOne}</p> 
            <div className="button-container">
                <div className="col-6">        
                    <Button
                    type="primary"
                    cta={props.heroButtonCtaOne}
                    link={props.heroButtonLinkOne}
                    />
                </div>       
                <div className="col-6 button mobile-hide"> 
                     <p >{props.heroButtonCtaTwo}</p>
                </div>
          <img className="arrow mobile-hide" width="100% "src ={arrow} alt="This is geeby."/>
            </div>
        </div>
        <div className="col-6 mobile-hide right" >
        <img src={props.heroImage} alt="this is a hero image" />
   
        </div> 
      </section>

    )
}