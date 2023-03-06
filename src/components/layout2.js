import React, { useState } from "react"
import NavBar from "./navbar"

import "../style/main.scss"
import Footer from './footer.js'


const Layout = ({ children, color }) => {
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
<Footer/>
    </div>
  )
}

export default Layout
