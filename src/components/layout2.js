import React, { useState, useEffect } from "react"
import NavBar from "./navbar"

import "../style/main.scss"
import Footer from './footer.js'

import TagManager from "react-gtm-module";



const Layout = ({ children, color }) => {
  useEffect(() => {
    TagManager.initialize({ gtmId: "G-WVS33VVKCS" });
  }, []);
  const [isActive, setIsActive] = useState(false)

  const toggleNavbar = () => {
    setIsActive(!isActive)
  }

  return (
    <div>
      <header>
        <NavBar color= {color} isActive={isActive} toggleNavbar={toggleNavbar} />
      </header>
      <main className="contain">{children}</main>
<Footer color= {color} />
    </div>
  )
}

export default Layout
