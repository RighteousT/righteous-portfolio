import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import sportsCar from "../assets/SportsCar.jpg";

function Hero() {
  return (
    <section className="hero">
      <div className="manga-panels">
        <div className="panel panel-1">
          <svg
            className="katana"
            viewBox="0 0 400 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="60"
              y="45"
              width="280"
              height="8"
              fill="#ffffff"
              stroke="#000"
              strokeWidth="3"
            />
            <line
              x1="60"
              y1="49"
              x2="340"
              y2="49"
              stroke="#000"
              strokeWidth="1.5"
              opacity="0.3"
            />
            <rect x="55" y="40" width="8" height="18" fill="#000" />
            <rect
              x="10"
              y="43"
              width="45"
              height="12"
              fill="#222"
              stroke="#000"
              strokeWidth="2"
            />
            <path
              d="M15 49 L20 43 L25 49 L30 43 L35 49 L40 43 L45 49 L50 43"
              stroke="#fff"
              strokeWidth="1.5"
              fill="none"
            />
            <polygon
              points="340,45 355,49 340,53"
              fill="#fff"
              stroke="#000"
              strokeWidth="2"
            />

            <g className="getsuga-container">
              <path
                className="getsuga-core"
                d="M340 50 Q380 10 420 30 Q460 70 500 40"
                fill="none"
                stroke="url(#getsugaCore)"
                strokeWidth="14"
                strokeLinecap="round"
              />
              <path
                className="getsuga-aura"
                d="M340 50 Q380 5 440 20 Q490 70 540 50"
                fill="none"
                stroke="url(#getsugaAura)"
                strokeWidth="28"
                strokeLinecap="round"
                opacity="0.5"
              />
              <path
                className="getsuga-trail"
                d="M340 50 Q380 15 450 35 Q500 75 560 45"
                fill="none"
                stroke="url(#trailGradient)"
                strokeWidth="36"
                strokeLinecap="round"
                opacity="0.25"
              />

              <defs>
                <linearGradient id="getsugaCore" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#ff1e1e" />
                  <stop offset="100%" stopColor="#000" />
                </linearGradient>
                <linearGradient id="getsugaAura" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#ff3d3d" />
                  <stop offset="100%" stopColor="#1a0000" />
                </linearGradient>
                <linearGradient id="trailGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#2b0000" />
                  <stop offset="50%" stopColor="#ff3d3d" />
                  <stop offset="100%" stopColor="#000" />
                </linearGradient>
              </defs>
            </g>
          </svg>
        </div>

        
        <div className="panel panel-2">
          <img src={sportsCar} alt="sports car" className="car-img" />
        </div>

        <div className="panel panel-3 panel-text">
          <h2>I like building apps thats looks clean</h2>
          <p>
            Most of my projects are focused on making things simple, responsive, and easy to use. 
            I’m still learning new tools and improving every project I build.
          </p>
        </div>

        {/* ===== Panel 4: Skills ===== */}
        <div className="panel panel-4 panel-skills">
          <h2>My Skills</h2>
          <div className="skills-grid">
            <span>Java</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Pyhton</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>C#</span>
            <span>Git</span>
          </div>
        </div>
      </div>

      <div className="hero-center">
  <div className="speech-bubble name-bubble">
    <h1 className="bubble-title">Righteous Taotao</h1>
    <p className="bubble-subtitle">Developer Candidate</p>

    <Link to="/projects">
      <button className="hero-btn">Explore My Projects</button>
    </Link>
  </div>
</div>
    </section>
  );
}

export default Hero;