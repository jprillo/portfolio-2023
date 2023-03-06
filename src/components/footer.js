import React from 'react'
import {Link} from 'gatsby'
import facebook from "../images/facebook.png"
import instagram from "../images/instagram.png"
import linkedin from "../images/linkedin.png"
import twitter from "../images/twitter.png"
import logo from "../images/logo.png"

export default function Footer() {
    return (
        <footer style={{background: "#181302"}}>
        <h3 style={{ color: "white", paddingTop: "2em" }}>Follow Us</h3>
        <div style={{ display: "flex", justifyContent: "center", padding: "1em 0 2em" }}>
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
        <div className="center v-pad-1">
          <Link to="/">
            <img width="200px" src={logo} alt="Vyntrade logo" />
          </Link>
        </div>
      </footer>
    )
}
