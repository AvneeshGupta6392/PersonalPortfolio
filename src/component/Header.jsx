import React from 'react'
import {Link} from "react-router-dom"
import { FaHome } from "react-icons/fa";

const Header = () => {
  return (
   <>
   <div id="header">
    <div className="logo"><img src="/logo.jpg" height="40px"width="40px"/>
   <h2><b>Portfolio</b></h2>
    </div>
    <div className="section">
      <ul className="nav-name">
        <a href="#home" className="active">Home</a>
        <a href="#about" >About</a>
        <a href="#skill" >Skills</a>
        <a href="#project" >Project</a>
        <a href="#contact" >ContactUs</a>
      </ul>
    </div>
   </div>
   </>
  )
}

export default Header
