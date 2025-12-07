import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

const About = () => {
  return (
    <div id="about">
          <div className="aboutleft"></div>        
        <div className="aboutright">
            <h1>About <span className="text-success">Me</span></h1>
            <h3 className='nameaniamtion'>Frontened Developer</h3><br/>
            <p className="para">Hi, I'm Avneesh, a Web Developer, I specialize in creating responsive, user-friendly, and visually appealing web interfaces using modern technologies like HTML, CSS, JavaScript, and frameworks such as React.js.I focus on translating UI/UX designs into functional websites, ensuring cross-browser compatibility, optimizing performance, and enhancing user experience. I shall wants work with collaborate closely with designers and backend developers to build seamless web applications."</p>
            <div className="icon">
            <a href="https://www.linkedin.com/in/avneesh-gupta-766019282/" target="new" ><FaLinkedin className='text-light fs-4'/></a>
            <a href="https://github.com/AvneeshGupta6392" target="new"><FaGithub className='text-light fs-4'/></a>
            <a href="https://x.com/Avneesh91730176?t=8TkhlpS6pNMyJv_p2WcoYw&s=09" target="new"><FaSquareXTwitter className='text-light fs-4'/></a>
            <a href="https://www.instagram.com/_avneesh_gupta_26/" target="new"><FaInstagram  className='text-light fs-4'/></a>
            <a href="mailto:guptaavneesh22@gmail.com" target="new"><MdOutlineMailOutline  className='text-light fs-4'/></a>
            </div>
            
        </div>
    </div>
  )
}

export default About
