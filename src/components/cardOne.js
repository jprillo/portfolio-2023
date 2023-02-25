import React from 'react'

import frame from '../images/frame.png'
import boner from '../images/2.png'




export default function CardOne(props) {
  
    return (

        <a href="#" className="col-3 " style={{position:" relative", backgroundSize: "cover",backgroundPosition: "center", backgroundImage:  `url('${boner}')`,height: "300px"}}>

<img  src={frame} alt="this is a hero" style={{  width: "100%", height: "100%"}} />
        
    <div style={{position: "absolute", bottom: "-20px", left: "0", right: 0, margin: "auto", background: "white", padding: "2px", width: '75%', border: "solid black 2px"}} >
          <h5 style={{color: "black", textAlign: "center", padding: 0, margin: 0}}>{props.title}</h5>
         
          </div>
        </a>

    )
}

