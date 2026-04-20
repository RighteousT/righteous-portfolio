import React from "react";
import "./WorkSamples.css";

function WorkSamples() {
  return (
    <section className="work-page">

      <h1 className="work-title">Work Experiences</h1> 

      
      <div className="work-row">
        <div className="work-panel title-panel">
          <h2 className="work-heading">Communication & Collaboration</h2>
        </div>

        <div className="work-panel text-panel">
          <p className="work-desc">
            In my roles at <strong>Residence Inn Halifax</strong> and as a 
            <strong> FCC Camera Volunteer</strong>, I often had to coordinate with teams 
            under time pressure. For example, when preparing large meal batches, 
            I worked closely with kitchen staff to organize tasks and maintain 
            efficiency.  
            <br /><br />
            A significant learning moment was realizing how essential active 
            listening is — during busy times, I learned to clarify tasks 
            quickly to avoid any misunderstandings.  
            <br /><br />
            This experience strengthened my communication skills, allowing me 
            to collaborate more effectively in project teams, including my 
            <strong> Anime Browser React project </strong> where I used Git branching to 
            coordinate code changes.  
            <br /><br />
            <strong>Business Benefit:</strong> Clear communication reduces errors, speeds up 
            workflow, and improves my team reliability.
          </p>
        </div>
      </div>

      {/* === Accountability === */}
      <div className="work-row">
        <div className="work-panel title-panel">
          <h2 className="work-heading">Accountability</h2>
        </div>

        <div className="work-panel text-panel">
          <p className="work-desc">
            While working as a kitchen attendant, I was responsible for 
            sanitation standards and inventory tracking. Ensuring equipment 
            was cleaned properly improved our health inspection results.  
            <br /><br />
            My “aha!” moment came when I discovered that tracking small 
            inventory items prevented ingredient shortages — I saw firsthand 
            how consistency builds trust with a team.  
            <br /><br />
            I applied this to programming by always maintaining version control 
            discipline in my projects, especially in <strong>HFX RouteRunner</strong>, 
            keeping a stable main branch and documenting each change.  
            <br /><br />
            <strong>Business Benefit:</strong> Accountability builds reliability, improves 
            workflow, and prevents costly mistakes.
          </p>
        </div>
      </div>

      {/* === Ethical Conduct === */}
      <div className="work-row">
        <div className="work-panel title-panel">
          <h2 className="work-heading">Ethical Conduct</h2>
        </div>

        <div className="work-panel text-panel">
          <p className="work-desc">
            At Faith City Tabernacle, I operated camera equipment and handled 
            recordings responsibly. Maintaining privacy and respecting the 
            community’s expectations taught me the importance of digital ethics.  
            <br /><br />
            This shaped my approach to software: I prioritize safe data 
            handling and follow API usage rules — especially in my 
            <strong> Anime Browser</strong> app, where respecting API limits and licensing 
            was essential.  
            <br /><br />
            <strong>Business Benefit:</strong> Ethical behavior protects an organization’s 
            reputation and avoids legal/security risks.
          </p>
        </div>
      </div>

      {/* === Lifelong Learning === */}
      <div className="work-row">
        <div className="work-panel title-panel">
          <h2 className="work-heading">Lifelong Learning</h2>
        </div>

        <div className="work-panel text-panel">
          <p className="work-desc">
            My IT journey has already involved learning multiple languages: 
            <strong> Python, Java, JavaScript, HTML/CSS, React, and OOP fundamentals</strong>.  
            <br /><br />
            A major breakthrough moment came during the <strong>BouncyBall 
            Simulation</strong>, where I implemented collision detection for the first 
            time. Understanding how the math worked behind the animation pushed 
            me to explore more advanced programming concepts.  
            <br /><br />
            I consistently learn new frameworks and refine my development 
            workflow using GitHub, React Hooks, and API integration.  
            <br /><br />
            <strong>Business Benefit:</strong> Lifelong learning ensures adaptability and 
            future-proofs an employee’s value.
          </p>
        </div>
      </div>

    </section>
  );
}

export default WorkSamples;
