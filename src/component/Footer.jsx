import React from 'react'
import { MdEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <div id="footer">
      <center><p>Copyright &copy; 2025 Avneesh Gupta | All rights <br/>Reserved</p>
      <p><MdEmail /> Email: <a href="mailto:guptaavneesh22@gmail.com"> guptaavneesh22@gmail.com</a></p>
      <p><CiLinkedin />
 LinkedIn ID:<a href="https://www.linkedin.com/in/avneesh-gupta-766019282/" target="new">www.linkedin.com/in/avneesh-gupta-766019282</a></p>
      
      </center>
    </div>
  )
}

export default Footer
