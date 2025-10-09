import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      
      <section className="about-hero">
        <div className="overlay">
          <h1>About Solviotech</h1>
          <p>
            Empowering businesses and innovators through modern software
            solutions crafted with excellence.
          </p>
        </div>
      </section>

      
      <section className="about-mission">
        <h2>Our Story & Mission</h2>
        <p>
          Solviotech was founded by <strong>Joseph Kennedy (JK)</strong> and{" "}
          <strong>Philip Osir</strong> — two passionate full-stack software
          engineers driven by the vision of providing elegant, scalable, and
          intelligent technology solutions for businesses around the world.
        </p>
        <p>
          We specialize in full-stack web and mobile development, cloud
          integration, and UI/UX design. Our mission is to create meaningful
          digital experiences that simplify complex problems and accelerate
          business growth.
        </p>
      </section>

     
      <section className="team-section">
        <h3 className="section-subtitle">Meet Our Team</h3>
        <h2 className="section-title">
          The passionate individuals behind Solviotech's success
        </h2>

        <div className="team-grid">
          
          <div className="team-card">
            <img
              src=""
              alt="Joseph Kennedy"
              className="team-img"
            />
            <div className="team-info">
              <h3>Joseph Kennedy (JK)</h3>
              <h4>Full-Stack Developer & Co-Founder</h4>
              <p>
                Passionate full-stack developer with expertise in React, Python,
                and cloud technologies. JK specializes in creating scalable web
                applications and has a keen eye for both frontend aesthetics and
                backend architecture.
              </p>
              <h5>Skills & Technologies</h5>
              <div className="skills">
                <span>React</span>
                <span>Python</span>
                <span>Flask</span>
                <span>AWS</span>
                <span>PostgreSQL</span>
                <span>Docker</span>
              </div>
            </div>
          </div>

         
          <div className="team-card">
            <img
              src=""
              alt="Philip Osir"
              className="team-img"
            />
            <div className="team-info">
              <h3>Philip Osir</h3>
              <h4>Full-Stack Engineer & Co-Founder</h4>
              <p>
                Skilled full-stack engineer and UI/UX designer who bridges
                design and functionality. Osir crafts seamless, high-performance
                web experiences with strong attention to user interaction,
                scalability, and modern architecture.
              </p>
              <h5>Skills & Technologies</h5>
              <div className="skills">
                <span>JavaScript</span>
                <span>TypeScript</span>
                <span>React</span>
                <span>Next.js</span>
                <span>Node.js</span>
                <span>MongoDB</span>
                <span>Tailwind CSS</span>
                <span>Figma</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
