import React from "react";
import "./Projects.css";
import splash from "../assets/projects/splash-screen.png";
import mainScreen from "../assets/projects/hfx-routerunner-main.jpg";
import animeBrowser from "../assets/projects/anime-browser.png";
import bouncyballImg from "../assets/projects/bouncy-simulation.png";




function Projects() {
  return (
    <section className="projects-page">

      <h1 className="projects-title">MY PROJECTS</h1>

      <div className="project-row">

  {/* Image panel */}
  <div className="project-panel photo-panel">
    <div className="project-images">
    <img src={splash} alt="Splash Screen" />
  <img src={mainScreen} alt="Main App Screen" />
    </div>
  </div>

  {/* Text panel */}
  <div className="project-panel text-panel">
    <h2 className="project-name">HFX RouteRunner</h2>
    <p className="project-desc">
      HFX RouteRunner is a mobile transit application built in 
      <strong> Android Studio</strong> using <strong>Kotlin</strong> and 
      <strong> Java</strong>.
      <br /><br />
      It features a custom splash screen, real-time bus location map,
      route browsing, and a clean design focused on usability and clarity.
      <br /><br />
      This project demonstrates that I have experience with Android UI/UX, MVVM, API
      handling, and Kotlin/Java integration.
    </p>
  </div>

</div>




      {/* === PROJECT 2 — Anime Browser (React App) === */}
<div className="project-row">

  {/* Image Panel */}
  <div className="project-panel photo-panel">
    <div className="project-images single-image">
      <img
        src={animeBrowser}
        alt="Anime Browser Screenshot"
      />
    </div>
  </div>

  {/* Text Panel */}
  <div className="project-panel text-panel">
    <h2 className="project-name">Anime Browser</h2>

    <p className="project-desc">
      Anime Browser is a web application built using 
      <strong> React</strong>, <strong>JavaScript</strong>, 
      <strong> HTML</strong>, and <strong> CSS</strong>.
      <br /><br />
      I used the <strong>Jikan API</strong> to fetch live anime data, allowing users to:
      <br />
      • Browse top anime  
      <br />
      • Search titles  
      <br />
      • View details such as synopsis, ranking, or score  
      <br /><br />
      The project uses <strong>React Router</strong>, modular UI components, 
      and a clean responsive interface.
      <br /><br />
      This project also reflects my passion for my interest on anime and modern front-end development.
    </p>
  </div>

</div>


      {/* === PROJECT 3 — BouncyBall Simulation === */}
<div className="project-row">

  {/* Image Panel */}
  <div className="project-panel photo-panel">
    <div className="project-images single-image">
      <img
        src={bouncyballImg}
        alt="BouncyBall Simulation Screenshot"
      />
    </div>
  </div>

  {/* Text Panel */}
  <div className="project-panel text-panel">
    <h2 className="project-name">BouncyBall Simulation</h2>

    <p className="project-desc">
      BouncyBall is an interactive desktop simulation built using
      <strong> Visual Studio </strong> and the 
      <strong> .NET Framework (Windows Forms)</strong>.
      <br /><br />
      It features animated objects including circles, squares, triangles, 
      and a custom <strong>Ford Mustang image</strong> that bounce around the screen with
      randomized colors and dynamic motion.
      <br /><br />
      Each object uses custom collision logic so shapes and the car image 
      bounce off one another in real time. Smooth animation is handled using a 
      <strong> game-style timer loop</strong> that updates movement every frame.
      <br /><br />
      This project demonstrates my experience with:
      <br />
      • Windows Forms graphics &amp; rendering  
      <br />
      • Timers &amp; animation loops  
      <br />
      • Collision detection algorithms  
      <br />
      • Randomized object behavior  
      <br /><br />
      The BouncyBall project is a fun introduction to physics simulation and graphical 
      programming in .NET.
    </p>
  </div>

</div>



    </section>
  );
}

export default Projects;
