import React from 'react'
import logo from '../images/pre.png'

export default function preloader(props) {
  return (
    <div className='preloader' style={{width: "100%", height: "100%", position: "absolute", zIndex: "1000", background: "#000000", opacity: props.isLoaded != true? '100%': '0%', 
    visibility: props.isLoaded != true? 'visible': 'hidden' }}>
    <div style={{position: "relative", width: "300px", background: "black",  margin: "25vh auto", opacity: props.isLoaded != true? '100%': '0%'}}>
          <img width= "100%" src={logo} alt="man riding a manatee" />
    <div class="loadingio-spinner-ball-2lvkl7cke55"><div class="ldio-zuexwzan24">
      
<div></div>
</div>
</div>
</div>
</div>
  )
}


