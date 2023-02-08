import React, { useState } from 'react';
import Button from './button.js'
import NavBar from "./navbar" 

import background from '../images/BACKGROUND2.png'
import cloudtop from '../images/cloud-top.png'
import arrow from '../images/arrow.png'
import letter from '../images/letter.png'


export default function Hero(props) {
  const [state, setState] = useState({
    isActive: false,
  
  });
 const toggleNavbar = () => {
    setState({ isActive: !state.isActive })
  }

    return (
      <div   style={{position: "relative", backgroundImage:  `url('${background}')`, backgroundSize: "cover", backgroundPosition: "top", overflowY: "hidden", width: "100%"}}>
      <div className='h-pad hero-container' >
      <NavBar isActive={state.isActive} toggleNavbar={() => toggleNavbar()} />
        <section className="hero flex gap-1">
        <div className="col-6" >
      
          <h1>{props.headingOne}</h1>      
          <p className="subheading">{props.subheadingOne}</p> 
            <div className="button-container">
                <div className="col-5">        
                    <Button
                    type="secondary"
                    cta={props.heroButtonCtaOne}
                    link={props.heroButtonLinkOne}
                    icon = {arrow}
                   
                    />
                
                </div>       
                <div className="col-6 "> 
                <Button
                    type="primary"
                    cta={props.heroButtonCtaTwo}
                    link= {props.heroButtonLinkTwo}
                    icon = {letter}
                    />
                   
                </div>
       
            </div>
        </div>
        <div className="col-6 right hero-image" >
        <img width= "100%" src={props.heroImage} alt="this is a hero image" />
   
        </div> 
      </section>
     
      </div>
      <img style={{verticalAlign: "bottom"}} width= "100%" src={cloudtop} alt="this is a hero image" />
      </div>
    )
}