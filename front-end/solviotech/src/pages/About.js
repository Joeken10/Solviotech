import React, { useEffect, useState } from "react";
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

  const { hero, mission, team } = aboutData;

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

     
      <section className="about-mission">
        <h2>{mission.title}</h2>
        {mission.content.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </section>

     
      <section className="team-section">
        <h3 className="section-subtitle">{team.sectionSubtitle}</h3>
        <h2 className="section-title">{team.sectionTitle}</h2>

        <div className="team-grid">
          {team.members.map((member, i) => (
            <div key={i} className="team-card">
              <img src={member.image} alt={member.name} className="team-img" />
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
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
