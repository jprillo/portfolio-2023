import React from "react";
import {Link} from 'gatsby'
import Button from '../components/button'


import twitter from '../images/twitter.png'
import github from '../images/github.png'
import dribbble from '../images/dribbble.png'
import formalflamingo from '../images/formalflamingo.png'

export function Clouds({
  video,
  arrow,
  letter
}) {
  return <section className="flex cloud v-pad h-pad gap-1" style={{
    width: "100%",
    overflowY: "hidden",
    background: "white",
    alignItems: "center"
  }}>
          <div className="col-6">
          <video controls width="100%" style={{
        border: "solid black 5px"
      }}>
      
      <source src={video} type="video/mp4" />
      Sorry, your browser doesn't support videos.
    </video>
          </div>
          <div className="col-6" style={{
      position: "relative"
    }}>
          <h2 style={{
        color: "black",
        padding: 0,
        marginTop: 0
      }}>Meet Mr. Prillo</h2>
              <p className="col-9" style={{
        color: "black"
      }}>
              Hello there, my name is Jason Prillo. I am a web developer and digtal artist based in Central Florida. I started Formal Flamingo Web Design in 2016 and specialize in making unique websites. </p><br />
             
              <div className="button-container">
                    
                <div className="col-4 "> 
                <Button type="primary sm" cta="Resume" link="/" icon={letter} />
                   
                </div>
       
            </div>
            <div className="social-media-bar">
              <Link to="/"> <img  src={github}alt="this is a hero" /></Link>
              <Link to="/"> <img  src={twitter}alt="this is a hero" /></Link>
              <Link to="/"> <img  src={dribbble}alt="this is a hero" /></Link>
              <Link to="/"> <img  src={formalflamingo}alt="this is a hero" /></Link>
            </div>
            </div>

        </section>;
        
}
  