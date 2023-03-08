

import React, {useState} from 'react'
import Layout from '../components/layout2'
import { Helmet } from 'react-helmet'
import jason from '../images/2.png'

export default function About() {
    const [isCool, setCoolness] = useState(false);
    const [inputValue, setInputValue] = useState('')
    
    const handleClick = () => {
   if (inputValue.toUpperCase() === "PLAINVIEW"){
    setCoolness(true)
   }
            
    }
  return (
    
        <div className="about  " style={{background: "white"}}>
                     <Helmet titleTemplate="%s | Blog">
            <title>"About Me</title>
            <meta
              name="description"
              content= "Jason prillo a web developer from Palm Bay, FL"
            />
          </Helmet>
<Layout color= 'light-nav' >
<div className='pad-top flex gap-1 v-pad h-pad'>
    <div className='col-6'>
        <h1>Learn More About Mr. Prillo</h1>
        <p style={{padding: "1em 0"}}> lot of this information is not for everyone and has been redacted, for your safety of course. <br/>
To see this information you must type in the passord. </p>
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
        <img style={{display: isCool ? 'block' : 'none'}} width="70%" src={jason}/>
        <p style={{display: isCool ? 'block' : 'none'}} >this is not an image of Mr Prillo merely a penis 
wearing a Che shirt but Che is a penis as well.</p>
    </div>
</div>
<div className=' h-pad'>
<h2>Experience</h2>

<div>

    <div className="flex " style={{justifyContent: "space-around", paddingLeft: "10%"}}>
        <div className='col-3'><p>jgjbhg</p></div>
        <div className='col-3'><p>jgjbhg</p></div>
        <div className='col-6'><p>cjhchchj  h v huojds noid nds0io hdsoi od od hdodch udhcd oudcsghouds godshdogdc ud gou gocu gcsauo</p></div>
   
    </div>
    <div style={{borderBottom: "solid white 4px", width: "90%", marginTop: "3rem", marginLeft: "10%"}}></div>
</div>

<div>
  
    <div className="flex " style={{justifyContent: "space-around", paddingLeft: "10%"}}>
        <div className='col-3'><p>jgjbhg</p></div>
        <div className='col-3'><p>jgjbhg</p></div>
        <div className='col-6'><p>cjhchchj  h v huojds noid nds0io hdsoi od od hdodch udhcd oudcsghouds godshdogdc ud gou gocu gcsauo</p></div>
   
    </div>
    <div style={{borderBottom: "solid white 4px", width: "90%", marginTop: "3rem", marginLeft: "10%"}}></div>
</div>
<div>

    <div className="flex " style={{justifyContent: "space-around", paddingLeft: "10%"}}>
        <div className='col-3'><p>2006</p></div>
        <div className='col-3'><p>College</p></div>
        <div className='col-6'><p>Jason Prillo went to the University of Central Florida where he 
            <span className= {` ${isCool ? "" : "redacted"}`} > {` ${isCool ? "studied barely ever and learned almost nothing but" : "   Sorry but you will find me far too clever"  }`}  </span>  obtained a degree in Social Science Education. </p></div>
   
    </div>
    <div style={{borderBottom: "solid white 4px", width: "90%", marginTop: "3rem", marginLeft: "10%"}}></div>
</div>

<h2>Tools</h2>
<div className='flex' style={{paddingLeft: "10%", gap: "3rem"}}>
    <div className='col-6' style={{background: "#2C2C2C", boxShadow: " inset 10px 4px 0px rgba(0, 0, 0, 1)", borderRadius: "25px", height: "300px", padding: "2rem"}}>
        <h3>Code</h3>
        <ul>
            <li>React</li>
            <li>Gatsby</li>
            <li>Netlify</li>
            <li>VSCode</li>


        </ul>
    </div>
    <div className='col-6'  style={{background: "#E8F7FF", boxShadow: " inset 10px 4px 0px rgba(0, 0, 0, 1)", borderRadius: "25px", height: "300px", padding: "2rem"}}>
    <h3 style={{color: "indigo"}}>Design</h3>
    <ul>
            <li>Figma</li>
            <li>Gimp</li>
            <li>Inkscape</li>
            <li>Midjourney</li>
            

        </ul>
        </div>
        </div>
</div>
</Layout>


    </div>
  )
}





