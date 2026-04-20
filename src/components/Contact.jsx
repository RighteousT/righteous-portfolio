import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <h1 className="contact-title">CONTACT</h1>

      <div className="contact-wrapper">
        <div className="contact-panel contact-left">
          <h2>Get In Touch</h2>
          <p>
            I’m a Programming graduate from NSCC and I’m continuing to improve 
            my skills through and build software and web development projects.
          </p>
          <p>
            Feel free to reach out if you’d like to connect, or
            learn more about my projects.
          </p>
        </div>

        <div className="contact-panel contact-right">
          <h2>Contact Info</h2>

          <div className="contact-item">
            <span className="contact-label">Email</span>
            <a href="mailto:trk309964@gmail.com">trk309964@gmail.com</a>
          </div>

          <div className="contact-item">
            <span className="contact-label">GitHub</span>
            <a
              href="https://github.com/RighteousT"
              target="_blank"
              rel="noreferrer"
            >
              https://github.com/RighteousT
            </a>
          </div>

          <div className="contact-item">
            <span className="contact-label">LinkedIn</span>
            <a
              href="https://www.linkedin.com/in/righteous-taotao-420230328/"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/righteous-taotao-420230328/
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;