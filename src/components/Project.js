import React from 'react'

function Project({ image, technologies, description, name }) {
  return (
    <a
      href="https://mellifluous-caramel-db6396.netlify.app/"
      className="project"
    >
      <img alt="" src={image} />
      <div className="aboutProject">
        <h3>{name}</h3>
        <p className="description">{description}</p>

        <div className="techs">
          {technologies.map((e, index) => {
            return (
              <span className="aTech" key={index}>
                {e}
              </span>
            );
          })}
        </div>

        <div className="consult">
          <span
            className="toConsult"
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault(); // <-- THIS FIXES IT
              // your custom action here:
              console.log("Live demo clicked");
            }}
          >
            Live Demo
          </span>

          <span
            className="toConsult"
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault(); // <-- THIS FIXES IT
              console.log("Code clicked");
            }}
          >
            Code
          </span>
        </div>
      </div>
    </a>
  );
}


export default Project
