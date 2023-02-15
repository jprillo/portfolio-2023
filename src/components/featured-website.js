import React from 'react'
import {Link} from 'gatsby'



export default function FeaturedWebsite(props) {

    return (
      

        <div className="flex gap-1 featured-website" style={{ overflow: "hidden"}}>
        <div  className="col-6">
        <img width= "100%" src={props.image} alt="this is a hero" />
  
  
  </div>
  <div className="col-6" style={{padding: "2vw", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
    <div>
    <h3>{props.title}</h3>
    <p>{props.description}</p>
    </div>
   
    <div style={{display: "flex", justifyContent: "space-between"}}>
     <div className='col-9'>
     <Link to="/">Learn More</Link> 
      </div> 
      <div className='col-3' style={{display: "flex", justifyContent: "space-between"}}>
      <Link to="/">Project</Link> 
      <Link to="/">icon</Link> 
    
        </div>
    </div>
  </div>
  
        </div>
    )
}

