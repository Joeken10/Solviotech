import React, { useEffect, useState, useRef } from "react";
import { ReactTyped } from "react-typed";
import "./About.css";

const About = () => {
  const [aboutData, setAboutData] = useState(null);
  const missionRef = useRef(null);

  // Fetch About data
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

  // Scroll animation for mission
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          missionRef.current.classList.add("visible");
        }
      },
      { threshold: 0.3 }
    );
    if (missionRef.current) observer.observe(missionRef.current);
    return () => observer.disconnect();
  }, []);

  if (!aboutData) return <p>Loading...</p>;

  const { hero, mission, team } = aboutData;

  // Highlight key terms dynamically
  const highlightText = (text) => {
    const keywords = [
      "innovation",
      "dedication",
      "excellence",
      "collaboration",
      "performance",
      "technology",
      "growth",
      "solutions",
    ];
    let newText = text;
    keywords.forEach((word) => {
      const regex = new RegExp(`\\b(${word})\\b`, "gi");
      newText = newText.replace(regex, `<strong>${word}</strong>`);
    });
    return newText;
  };

  return (
    <div className="about-page">
      {/* ===== HERO SECTION ===== */}
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

      {/* ===== OUR STORY & MISSION ===== */}
      <section className="about-mission" ref={missionRef}>
        <h2 className="mission-title">
          <ReactTyped
            strings={["Our Story & Mission"]}
            typeSpeed={40}
            backSpeed={0}
            showCursor={false}
          />
        </h2>

        <p>
          Solviotech was founded by{" "}
          <strong>Joseph Kennedy (JK)</strong> and{" "}
          <strong>Philip Osir</strong> — two passionate full-stack software
          engineers driven by the vision of providing{" "}
          <strong>elegant, scalable, and intelligent</strong> technology
          solutions for businesses across the globe.
        </p>

        <p>
          We specialize in full-stack web and mobile development, cloud
          integration, and UI/UX design. Our mission is to create{" "}
          <strong>meaningful digital experiences</strong> that simplify complex
          problems and accelerate business growth through{" "}
          <strong>innovation</strong> and <strong>excellence</strong>.
        </p>

        <p>
          What sets us apart is our relentless commitment to{" "}
          <strong>understanding your vision</strong> — transforming ideas into
          seamless digital products that deliver real value, foster{" "}
          <strong>collaboration</strong>, and drive measurable{" "}
          <strong>performance</strong>.
        </p>

        {mission.content.map((p, i) => (
          <p key={i} dangerouslySetInnerHTML={{ __html: highlightText(p) }} />
        ))}
      </section>

      {/* ===== VALUES SECTION ===== */}
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
              We embrace new technologies and creative thinking to craft
              unique, impactful solutions.
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

      {/* ===== TEAM SECTION ===== */}
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
