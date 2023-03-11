import React from 'react'
import {Link} from 'gatsby'
import facebook from "../images/facebook.png"
import instagram from "../images/instagram.png"
import linkedin from "../images/linkedin.png"
import twitter from "../images/twitter.png"
import logo from "../images/logo.png"

export default function Footer({color}) {
    return (
        <footer  >
          <div className='flex h-pad' style={{alignItems: "center",paddingTop: "2rem", paddingBottom: "2rem",  backgroundColor:  color === 'dark-nav' ? '#5b4709' : '#065b5b'}} >
          <div className='col-6'>
\
          <Link to="/">
            <img width="150px" src={logo} alt="Jason Prillo logo" />
          </Link>
      
</div>
            <div className='col-6'>
      
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <h3 style={{ color: "white"}}>Follow Us</h3>
          <a style={{ margin: "0 20px" }} href="https://facebook.com/vyntrade" alt="facebook">
            <img width="50px" alt="facebook" src={facebook} />
          </a>
          <a style={{ margin: "0 20px" }} href="https://instagram.com/vyntrade" alt="instagram">
            <img width="50px" alt="instagram" src={instagram} />
          </a>
          <a style={{ margin: "0 20px" }} href="https://twitter.com/vyntradevines " alt="twitter">
            <img width="50px" alt="twitter" src={twitter} />
          </a>
          <a
            style={{ margin: "0 20px" }}
            href="https://linkedin.com/company/vyntrade-importing-and-consulting/"
            alt="linkedin"
          >
            <img width="50px" alt="linkedin" src={linkedin} />
          </a>
        </div>
            </div>



          </div>
       <div style={{background: "darkpink"}}>
        <p style={{textAlign: "center", color: "grey", padding: "em 0"}}>Copyright 2023 Jason Prillo Web Development</p>
       </div>
 
      </footer>
    )
}
