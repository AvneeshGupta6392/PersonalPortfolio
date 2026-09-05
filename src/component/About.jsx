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
            <h3 className='nameaniamtion'>Full-Stack Developer</h3><br/>
            <p className="para">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
             Hi, I’m Avneesh, a passionate Full-Stack Developer specializing in the MERN stack. I enjoy building modern, responsive, and user-friendly web applications using HTML, CSS, JavaScript,Bootstrap, React.js, Node.js, Express.js, and MongoDB.

            I have hands-on experience developing responsive interfaces, integrating REST APIs, and connecting frontend applications with backend services and databases. I focus on writing clean, maintainable code while creating seamless digital experiences with strong performance, usability, and responsive design.
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             I’m always eager to learn new technologies, solve real-world problems, and contribute to impactful projects &nbsp; while continuously growing as a developer.
             </p>
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
