import React from 'react'
import {Link} from 'gatsby'
import github from '../images/github-negative.png'


import twitter from '../images/twitter.png'






export default function FeaturedWebsite(props) {

    return (
      

        <div className="flex gap-1 " style={{ overflow: "hidden"}}>
        <div  className="col-6">
        <Link to ={props.link}>
        <img width= "100%" height="100%" style={{objectFit: "cover"}} src={props.image} alt="this is a hero" />
  
        </Link>
  </div>
  <div className="col-6" style={{
      position: "relative"
    }}>
          <h2 style={{
        color: "white",
        padding: 0,
        marginTop: 0
      }}>{props.title}</h2>
              <p className="col-9">
             {props.description1} </p><br />
             <p className="col-9">
             {props.description2} </p><br />
             
          
            <div className="social-media-bar">
              <Link to="/"> <img  src={github}alt="this is a hero" /></Link>
              <Link to="/"> <img  src={twitter}alt="this is a hero" /></Link>
              <Link to="/"> <img  src={github}alt="this is a hero" /></Link>
       
            </div>
            </div>
  
        </div>
    )
}

