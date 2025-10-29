import React, { useEffect, useState } from "react";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./About.css";

const About = () => {
  const [aboutData, setAboutData] = useState(null);
  const navigate = useNavigate(); 

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
        className="about-hero split-hero"
        style={{ backgroundImage: `url(${hero.backgroundImage})` }}
      >
        <div className="split-container">
          
          <motion.div
            className="hero-left"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="hero-title">
              <ReactTyped
                strings={["About Solviotech"]}
                typeSpeed={45}
                backSpeed={25}
                showCursor={false}
              />
            </h1>

            <p className="hero-subtitle big-text">
              Empowering businesses and innovators through{" "}
              <strong>modern software solutions</strong> crafted with{" "}
              <strong>excellence</strong>, precision, and purpose.
            </p>

            <p className="hero-tagline big-text">
              At <strong>Solviotech</strong>, we believe technology should{" "}
              <em>simplify, amplify, and inspire</em> — helping organizations
              unlock their true potential in the digital era.
            </p>

            
            <motion.button
              className="hero-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/portfolio")}
            >
              Discover More →
            </motion.button>
          </motion.div>

          
          <motion.div
            className="hero-right"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <motion.img
              src={`${process.env.PUBLIC_URL}/about-illustration.jpg`}
              alt="About Solviotech"
              className="hero-image"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        </div>
      </section>

      
      <section className="mission-vision">
        <h2 className="mv-title">
          <span className="mv-highlight">Our Story</span>
          <br />
          Company <strong>Mission & Vision</strong>
        </h2>

        <div className="mv-grid">
          
          <motion.div
            className="mv-card mv-mission"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
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
          </motion.div>

          
          <motion.div
            className="mv-card mv-vision"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
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
          </motion.div>
        </div>
      </section>

      
      <section className="values-section">
        <motion.h3
          className="values-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Our Values
        </motion.h3>

        <h2 className="values-title">
          The principles that guide everything we do
        </h2>

        <div className="values-grid">
          {[
            {
              icon: "💻",
              title: "Quality Code",
              text: "We build robust, maintainable, and scalable solutions that stand the test of time.",
            },
            {
              icon: "💡",
              title: "Innovation",
              text: "We embrace new technologies and creative thinking to craft unique, impactful solutions.",
            },
            {
              icon: "🤝",
              title: "Collaboration",
              text: "We partner closely with clients — understanding goals, sharing ideas, and building trust.",
            },
            {
              icon: "⚡",
              title: "Performance",
              text: "Every system we build is optimized for speed, reliability, and user experience.",
            },
          ].map((v, i) => (
            <motion.div
              key={i}
              className="value-card"
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: "spring", stiffness: 150 }}
            >
              <div className="value-icon">{v.icon}</div>
              <h4>{v.title}</h4>
              <p>{v.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

     
      <section className="team-section">
        <h3 className="section-subtitle">{team.sectionSubtitle}</h3>
        <h2 className="section-title">{team.sectionTitle}</h2>

        <div className="team-grid">
          {team.members.map((member, i) => (
            <motion.div
              key={i}
              className="team-card"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 150 }}
            >
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
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
