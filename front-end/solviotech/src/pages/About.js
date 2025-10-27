import React, { useEffect, useState } from "react";
import { ReactTyped } from "react-typed";
import "./About.css";

const About = () => {
  const [aboutData, setAboutData] = useState(null);

  
  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const res = await fetch("http://localhost:5000/about");
        const data = await res.json();
        setAboutData(data);
      } catch (error) {
        console.error("Error fetching about data:", error);
      }
    };
    fetchAboutData();
  }, []);

  if (!aboutData) return <p>Loading...</p>;

  const { hero, team } = aboutData;

  return (
    <div className="about-page">
      
      <section
        className="about-hero"
        style={{ backgroundImage: `url(${hero.backgroundImage})` }}
      >
        <div className="overlay">
          <h1 className="hero-title">
            <ReactTyped
              strings={["About Solviotech"]}
              typeSpeed={50}
              backSpeed={0}
              showCursor={false}
            />
          </h1>

          <p className="hero-subtitle">
            Empowering businesses and innovators through{" "}
            <strong>modern software solutions</strong> crafted with{" "}
            <strong>excellence</strong>, precision, and purpose.
            <br />
            <br />
            At <strong>Solviotech</strong>, we believe technology should
            simplify, amplify, and inspire — helping organizations unlock
            their true potential in the digital era.
          </p>
        </div>
      </section>

      
      <section className="mission-vision">
        <h2 className="mv-title">
          <span className="mv-highlight">Our Story</span>
          <br />
          Company <strong>Mission & Vision</strong>
        </h2>

        <div className="mv-grid">
          
          <div className="mv-card mv-mission">
            <div className="mv-text">
              <h3>Our Mission to Achieve Excellence</h3>
              <p>
                At <strong>Solviotech</strong>, our mission is to empower
                startups, businesses, and innovators through smart, scalable,
                and elegant technology. We help brands build strong digital
                foundations, enhance user experience, and grow sustainably in
                the modern tech landscape.
              </p>
              <button className="mv-btn">Our History →</button>
            </div>

            <div className="mv-image">
              <img
                src={`${process.env.PUBLIC_URL}/mission.jpg`}
                alt="Solviotech Mission"
              />
            </div>
          </div>

          
          <div className="mv-card mv-vision">
            <div className="mv-text">
              <h3>Our Vision to Inspire Growth</h3>
              <p>
                We envision a world where businesses leverage digital
                intelligence to reach new heights. By combining{" "}
                <strong>technology</strong>, <strong>design</strong>, and{" "}
                <strong>collaboration</strong>, we aim to build solutions that
                inspire progress and drive lasting success.
              </p>
              <button className="mv-btn">Our History →</button>
            </div>

            <div className="mv-image">
              <img
                src={`${process.env.PUBLIC_URL}/vision.jpg`}
                alt="Solviotech Vision"
              />
            </div>
          </div>
        </div>
      </section>

      
      <section className="values-section">
        <h3 className="values-subtitle">Our Values</h3>
        <h2 className="values-title">
          The principles that guide everything we do
        </h2>

        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">💻</div>
            <h4>Quality Code</h4>
            <p>
              We build robust, maintainable, and scalable solutions that stand
              the test of time.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">💡</div>
            <h4>Innovation</h4>
            <p>
              We embrace new technologies and creative thinking to craft unique,
              impactful solutions.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">🤝</div>
            <h4>Collaboration</h4>
            <p>
              We partner with clients closely — understanding their goals,
              sharing ideas, and building trust.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">⚡</div>
            <h4>Performance</h4>
            <p>
              Every system we build is optimized for speed, reliability, and
              exceptional user experience.
            </p>
          </div>
        </div>
      </section>

      
      <section className="team-section">
        <h3 className="section-subtitle">{team.sectionSubtitle}</h3>
        <h2 className="section-title">{team.sectionTitle}</h2>

        <div className="team-grid">
          {team.members.map((member, i) => (
            <div key={i} className="team-card">
              <div className="team-card-inner">
                <div className="team-image-wrapper">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="team-img"
                  />
                </div>

                <div className="team-info">
                  <h3>{member.name}</h3>
                  <h4>{member.role}</h4>
                  <p>{member.bio}</p>
                  <h5>{member.skillsTitle}</h5>

                  <div className="skills">
                    {member.skills.map((skill, j) => (
                      <span key={j}>{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
