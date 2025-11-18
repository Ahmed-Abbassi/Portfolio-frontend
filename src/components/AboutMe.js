import React from 'react'
import image1 from "../images/i.jpg"
import html from "../images/html.webp"
import css from "../images/css.webp"
import chakra from "../images/chakra.jpg"
import sass from "../images/sass.jpg"
import js from "../images/js.jpg"
import react from "../images/reactjs.png"
import node from "../images/node-js.png"
import express from "../images/express.png"
import sales from "../images/sales.png"
function AboutMe() {
  return (
    <div className="aboutMe">
          <div className="presentationWithImage">
            <div className='textPresentation'>
              <h1>Software engineering Student at <span>ISITCOM Sousse</span></h1>
              
              <p>I am a Software Engineering student with experience in full-stack development and Salesforce development and administration. I enjoy building clean, scalable applications and have worked on AI integrations, user management systems, and dynamic dashboards. I am curious, motivated, and always improving my skills</p>
            </div>
            <img src={image1} alt='my'/>

          </div>
          <div className='stackAndTechnos'>
            <h4 className='stack'>
              Tech Stack
            </h4>
            <div className='images'>
              <img alt='html' src={html} />
              <img alt='css' src={css} />
              <img alt='chakra' src={chakra} />
              <img alt='sass' src={sass} />
              <img alt='js' src={js}/>
              <img alt='react' src={react} />
              <img alt='node' src={node} />
              <img alt='express' src={express} />
              <img alt='salesforce' id='sales' src={sales}/>
            </div>
          </div>

        </div>
  )
}

export default AboutMe
