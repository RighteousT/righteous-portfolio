import React from "react";
import "./About.css";
import myPhoto from "../assets/RighteousTaotao.jpg"; // ← import your image

function About() {
  return (
    <section className="about-page">

      <div className="about-panels">

        {/* ==== PHOTO PANEL ==== */}
        <div className="about-panel photo-panel">
          <img src={myPhoto} alt="Righteous Taotao" className="about-photo" />
        </div>

        {/* ==== INFO PANEL ==== */}
        <div className="about-panel text-panel">
          <h2 className="about-title">ABOUT ME</h2>

          <p>
            Hello! I'm <strong>Righteous Taotao</strong>, I’m interested in software development and enjoy building projects that combine clean design, 
            practical features, and problem solving. Through my coursework and personal projects, 
            I’ve worked with Java, JavaScript, React, HTML, CSS, SQL, C, and Python.
            
          </p>

          <p>
           Some of my projects have focused on mobile apps, web applications, and UI design, 
           which helped me improve both my technical skills and my creativity. 
           I like learning by building, and each project has pushed me to become more confident in writing code, fixing problems, and creating applications that are useful and easy to use.
          </p>

          <p>
            I have been challenged with different projects and assignments throughout my studies, 
            but I am determined to overcome them and continuing to grow as a developer. 
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;
