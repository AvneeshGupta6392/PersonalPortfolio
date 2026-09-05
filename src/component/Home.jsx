import React from 'react'

const Home = () => {
  return (
    <div id="home">
        <div className='homeleft'>
          <span className="medium">Hello, It's me</span><br/>
          <span  className="bold">Avneesh Gupta</span><br/>
          <span  className="medium">And I'm</span><br/>
          <span className="small">Full-Stack Web Developer</span><br/>
          <span className="lorem">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            I’m a passionate Full-Stack Developer focused on building modern, responsive, and scalable web applications. I have hands-on experience with HTML, CSS, JavaScript, Bootstrap, React.js, Node.js, Express.js, and MongoDB, along with REST APIs and frontend-backend integration. I enjoy transforming ideas into intuitive digital experiences with clean code, responsive design, strong functionality, and a focus on performance and user experience, while continuously learning and improving my technical skills.
          </span><br/>
          <br/><a className='Hbtn' href="/resume_avneesh.pdf" target="new"><b>Resume</b></a> 
        </div>
        <div className='homeright'></div>
    </div>
  )
}

export default Home
