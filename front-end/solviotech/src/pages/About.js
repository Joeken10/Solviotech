import React, { useEffect, useState, useRef } from "react";
import "./About.css";

const About = () => {
  const [aboutData, setAboutData] = useState(null);
  const missionRef = useRef(null);

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

  
  const highlightText = (text) => {
    const keywords = ["innovation", "dedication", "excellence", "collaboration", "performance"];
    let newText = text;
    keywords.forEach((word) => {
      const regex = new RegExp(`\\b(${word})\\b`, "gi");
      newText = newText.replace(regex, `<strong>${word}</strong>`);
    });
    return newText;
  };

  return (
    <div className="about-page">
     
      <section
        className="about-hero"
        style={{ backgroundImage: `url(${hero.backgroundImage})` }}
      >
        <div className="overlay">
          <h1>{hero.title}</h1>
          <p>{hero.subtitle}</p>
        </div>
      </section>

     
      <section className="about-mission" ref={missionRef}>
        <h2>{mission.title}</h2>
        {mission.content.map((p, i) => (
          <p key={i} dangerouslySetInnerHTML={{ __html: highlightText(p) }} />
        ))}
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
            <p>We write clean, maintainable code that stands the test of time.</p>
          </div>

          <div className="value-card">
            <div className="value-icon">💡</div>
            <h4>Innovation</h4>
            <p>We stay ahead of the curve with the latest technologies and best practices.</p>
          </div>

          <div className="value-card">
            <div className="value-icon">🤝</div>
            <h4>Collaboration</h4>
            <p>We work closely with clients to understand and exceed their expectations.</p>
          </div>

          <div className="value-card">
            <div className="value-icon">⚡</div>
            <h4>Performance</h4>
            <p>We optimize every aspect to deliver fast, efficient solutions.</p>
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
