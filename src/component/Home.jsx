import React from 'react'

const Home = () => {
  return (
    <div id="home">
        <div className='homeleft'>
          <span className="medium">Hello, It's me</span><br/>
          <span  className="bold">Avneesh Gupta</span><br/>
          <span  className="medium">And I'm</span><br/>
          <span className="small">Frontend Developer</span><br/>
          <span className="lorem">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            I'm a passionate Web Developer dedicated to building clean, responsive, and interactive user interfaces using modern web technologies like HTML, CSS, JavaScript, Bootstrap and with experience framework like React.js and Node.js. My portfolio includes a responsive website I develop for a local business, where I focused on enhancing user experience and accessibility.
          </span>
          <br/><a className='Hbtn' href="/avneeshresume.pdf" target="new"><b>Resume</b></a> 
        </div>
        <div className='homeright'></div>
    </div>
  )
}

export default Home
