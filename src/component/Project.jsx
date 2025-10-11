import React from 'react'

const Project = () => {
  return (
    
    <div id="project">
      <div id="head"><h1>My Projects</h1></div>
      <div className="projectsection">
        <div className="topproject">
            <div className="imgbox quirex"><img src="/QUIREX.png" alt="Null" className="setimgs"/></div>
            <div className="imgbox news"><img src="/NEWS.png" alt="Null" className="setimgs"/></div>
            <div className="imgbox socialmedia"><img src="/socialmedia.jpg" alt="Null" className="setimgs"/></div>
            <div className="imgbox calculator"><img src="/calculator.png" alt="Null" className="setimgs"/></div>
        </div>
        <div className="lowerproject">
            <div className="imgbox musicplayer"><img src="/musiceplayer.png" alt="Null" className="setimgs"/></div>
            <div className="imgbox digitalclock"><img src="/digitalclock.png" alt="Null" className="setimgs"/></div>
            <div className="imgbox amazonclone"><img src="/amznclone.png" alt="Null" className="setimgs"/></div>
            <div className="imgbox food"><img src="/food.png" alt="Null" className="setimgs"/></div>
        </div>
      </div>
    </div>
  )
}

export default Project
