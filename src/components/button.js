import React from 'react'


export default function Button(props) {
  var type = props.type;
    return (

  <a  href= {props.link}>
    <button className={"button " + type} >
    <p>{props.cta}</p>
    </button>
   
    
 
   </a>

    )
}
