import React from 'react'

const Skill = () => {
  return (
    <div id="skill">
        <div id="heading"><h1>Skills</h1></div>
        <div className="skillsection">
           <div className="topskill">
            <div className="boxes"><img src="/html.jpg" alt="Null" className="setimg"/></div>
            <div className="boxes"><img src="/CSS.jpg" alt="Null" className="setimg"/></div>
            <div className="boxes"><img src="/JS.jpg" alt="Null" className="setimg"/></div>
            <div className="boxes"><img src="/bootstrap.jpeg" alt="Null" className="setimg"/></div>
            <div className="boxes"><img src="/react.svg" alt="Null" className="setimg"/></div>
          </div>
          <div className="lowerskill">
            <div className="boxes"><img src="/nodejs.png" alt="Null" className="setimg"/></div>
            <div className="boxes"><img src="/C.jpg" alt="Null" className="setimg"/></div>
            <div className="boxes"><img src="/java.png" alt="Null" className="setimg"/></div>
            <div className="boxes"><img src="/sql.jpeg" alt="Null" className="setimg img-fluid"/></div>
          </div>
        </div>
    </div>
  )
}

export default Skill
