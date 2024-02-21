// Skills.js

import React, { useEffect } from "react";
import "./Skills.css"; // Import the CSS file for styling
import "animate.css";

export const Skills = () => {
  useEffect(() => {
    const logos = document.querySelectorAll(".skill-logo");
    logos.forEach((logo) => {
      const animationDuration = Math.random() * (30 - 15) + 15; // Random duration between 15s and 30s
      logo.style.animationDuration = `${animationDuration}s`;
    });
  }, []);

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-container">
          {/* Your technology logos here */}
          <div className="skill-logo html" id="one"></div>
          <div className="skill-logo css" id="two"></div>
          <div className="skill-logo javascript" id="three"></div>
          <div className="skill-logo cpp" id="four"></div>
          <div className="skill-logo react" id="five"></div>
          <div className="skill-logo redux" id="four"></div>
          <div className="skill-logo bootstrap" id="three"></div>
          <div className="skill-logo nodejs" id="two"></div>
          <div className="skill-logo mongo" id="one"></div>
          <div className="skill-logo git" id="two"></div>
          <div className="skill-logo premiere" id="three"></div>
          <div className="skill-logo ae" id="four"></div>
          <div className="skill-logo canva" id="five"></div>
          <div className="skill-logo fl" id="four"></div>
          {/* Add more logos as needed */}
        </div>
      </div>
    </section>
  );
};
