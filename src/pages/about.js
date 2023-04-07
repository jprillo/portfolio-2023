

import React, {useState} from 'react'
import Layout from '../components/layout2'
import { Helmet } from 'react-helmet'
import jason from '../images/2.png'
import {Link} from 'gatsby'

export default function About() {
    const [isCool, setCoolness] = useState(false);
    const [inputValue, setInputValue] = useState('')
    
    const handleClick = () => {
   if (inputValue.toUpperCase() === "PLAINVIEW"){
    setCoolness(true)
   }
            
    }
  return (
    
        <div  style={{background: "#202124"}}>
                     <Helmet titleTemplate="%s | Blog">
            <title>"About Me</title>
            <meta
              name="description"
              content= "Jason prillo a web developer from Palm Bay, FL"
            />
          </Helmet>
<Layout color= 'light-nav' >
<div className='pad-top flex gap-1 v-pad h-pad b-pad '>
    <div className='col-6'>
        <h1>Learn More About Mr. Prillo</h1>
        <p style={{padding: "1em 0"}}> A lot of this information is not for everyone and has been redacted, for your safety of course. <br/>
To see this information you must type in the password. </p>
<div style={{marginBottom: "2rem", border: "solid black 2px", padding: ".2rem 2rem", display: "flex"}}>
    <p style={{ textAlign: "left"}}>Hint:</p>
    <p> The hero in "There Will be Blood".</p>
</div>
<div className='flex gap-2'>
    <p className='col-6'> PASSWORD</p>
    <input maxlength="9" style={{textTransform: "uppercase", background: "lightgrey"}} type="text" onChange={event => setInputValue(event.target.value)}  ></input>
</div>
     <div className='col-6'>
     <button className= "button primary " onClick={handleClick} style={{display: "flex", alignItems: "center"}}>
    <p style={{ width: "100%"}}>Submit</p>  
    </button>
        </div>
    </div>
    <div className='col-6 center' style={{padding: "0 5rem", display: "flex", flexDirection: "column", justifyContent: "center", backgroundColor: isCool ? "" : "black"}}>        
        <img style={{display: isCool ? 'block' : 'none'}} width="100%" alt="jason prillo" src={jason}/>
        <p style={{display: isCool ? 'block' : 'none'}} >this is not an image of Mr Prillo merely a penis 
wearing a Che shirt but Che is a penis as well.</p>
    </div>
</div>
<div className=' h-pad b-pad light-text'>
<h2>Experience</h2>

<div>

    <div className="flex pad-top " style={{justifyContent: "space-around", paddingLeft: "10%"}}>
        <div className='col-3'><p>2017 - Present</p></div>
        <div className='col-3'><p>Web Developer</p></div>
        <div className='col-6'><p>I have been working for myself as a web developer in Florida. My agency's name is <Link to="https://formalflamingo.com" style={{color: "pink"}}> Formal Flamingo</Link>. </p></div>
   
    </div>
    <div style={{borderBottom: "solid #d5FFFd 4px", width: "90%", marginTop: "3rem", marginLeft: "10%"}}></div>
</div>

<div>
  
    <div className="flex " style={{justifyContent: "space-around", paddingLeft: "10%", paddingTop: "3rem",}}>
        <div className='col-3'><p>2006 - 2016</p></div>
        <div className='col-3'><p>Teacher</p></div>
        <div className='col-6'><p>During this time I was an ESE teacher at various schools and programs for criminally insane children and a one church. Guess which was more annoying?  <span className= {` ${isCool ? "" : "redacted"}`} > {` ${isCool ? "The Church ... Obviously" : "   Sorry but you will find me far too clever"  }`}  </span>    </p></div>
   
    </div>
    <div style={{borderBottom: "solid #f1d296 4px", width: "90%", marginTop: "3rem", marginLeft: "10%", }}></div>
</div>
<div className='b-pad' >

    <div className="flex  " style={{justifyContent: "space-around", paddingLeft: "10%", paddingTop: "3rem",}}>
        <div className='col-3'><p>2006</p></div>
        <div className='col-3'><p>College</p></div>
        <div className='col-6'><p>I went to the University of Central Florida where I 
            <span className= {` ${isCool ? "" : "redacted"}`} > {` ${isCool ? "studied barely ever and learned almost nothing but" : "   Sorry but you will find me far too clever"  }`}  </span>  obtained a degree in Social Science Education. </p></div>
   
    </div>
    <div style={{borderBottom: "solid #FEE1F3 4px", width: "90%", marginTop: "3rem", marginLeft: "10%"}}></div>
</div>

<h2>Tools</h2>
<div className='flex pad-top' style={{paddingLeft: "10%", gap: "3rem"}}>
    <div className='col-6' style={{background: "#2C2C2C", boxShadow: " inset 10px 4px 0px rgba(0, 0, 0, 1)", borderRadius: "25px", padding: "2rem"}}>
        <h3>Code</h3>
        <ul>
            <li>React</li>
            <li>Gatsby</li>
            <li>Netlify</li>
            <li>VSCode</li>


        </ul>
    </div>
    <div className='col-6'  style={{background: "#E8F7FF", boxShadow: " inset 10px 4px 0px rgba(0, 0, 0, 1)", borderRadius: "25px",  padding: "2rem"}}>
    <h3 style={{color: "indigo"}}>Design</h3>
    <ul className='dark-text' >
            <li>Figma</li>
            <li>Gimp</li>
            <li>Inkscape</li>
   
            

        </ul>
        </div>
        </div>

       
        <h2>
            Other Sick Tricks:
        </h2>
        <div className='flex pad-top' style={{marginLeft: "10%", gap: "3rem", background: "purple", boxShadow: " inset 10px 4px 0px rgba(0, 0, 0, 1)", borderRadius: "25px",  padding: "2rem"}}>
    <div className='col-4' >
      
        <ul>
            <li>Gardening</li>
            <li>Painting</li>
            <li>Jeweler</li>
     

        </ul>
    </div>

    <div className='col-4' style={{marginLeft: "10%"}}>
      
      <ul>
          <li>Mycology</li>
          <li>Lepidopterology</li>
   


      </ul>
  </div>
    <div className='col-4' >
   
    <ul className='dark-text' >
           
            <li><p>Prompt Engineering LOL</p></li>
   
            

        </ul>
        </div>
        </div>
    
        <div className='h-pad pad-top'>
            <p>Do you like this site? Do you want a site like this for your own business?</p>
            <p>Perhaps you are more interested in Geeby the Gatsby starter the trys to kill you.</p>
            <p> Maybe you are here becauese you want to buy bananas from a fictional antgonist.</p>
            <p> Possibly you have a yacht and need someone to tour the world with?</p>
            <p> When I was 30 I went to my first water park. I could tell you all about it. Thank You.  </p>
        </div> 

</div>
</Layout>


    </div>
  )
}






