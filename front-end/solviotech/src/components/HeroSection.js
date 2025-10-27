import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";
import { Search, PenTool, Code2, CheckCircle2, Rocket } from "lucide-react";
import "./HeroSection.css";

const HeroSection = () => {
  const [heroData, setHeroData] = useState({});
  const [stats, setStats] = useState([]);
  const [services, setServices] = useState([]);
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [showFullHeading, setShowFullHeading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [heroRes, statsRes, servicesRes, projectsRes] = await Promise.all([
          fetch("http://localhost:5000/hero"),
          fetch("http://localhost:5000/stats"),
          fetch("http://localhost:5000/services"),
          fetch("http://localhost:5000/featuredProjects"),
        ]);

        const heroData = await heroRes.json();
        const statsData = await statsRes.json();
        const servicesData = await servicesRes.json();
        const projectsData = await projectsRes.json();

        setHeroData(heroData);
        setStats(statsData);
        setServices(servicesData);
        setFeaturedProjects(projectsData);
      } catch (error) {
        console.error("Error fetching homepage data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="hero-wrapper">
      
      <section
        className="hero"
       style={{
  backgroundImage: `url(${heroData.image || "/images/homepage.jpg"})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
}}

      >
        <div className="overlay"></div>
        <div className="hero-content">
          {!showFullHeading ? (
            <h1 className="hero-title">
              <ReactTyped
                strings={[
                  "Crafting Digital Solutions That <br/>Transform Your Business",
                ]}
                typeSpeed={50}
                showCursor={false}
                loop={false}
                onComplete={() => setShowFullHeading(true)}
              />
            </h1>
          ) : (
            <h1 className="hero-title show-full">
              Crafting Digital Solutions That <br />
              <span className="highlight">Transform Your Business</span>
            </h1>
          )}

          <p className="hero-subtitle">
            We are <span className="brand-name">Solviotech</span> — a passionate
            team of developers creating innovative web and mobile applications
            that drive results and exceed expectations.
          </p>

          <div className="hero-buttons">
            <Link to="/portfolio" className="btn-primary">
              {heroData.primaryBtn || "View Our Work →"}
            </Link>
            <Link to="/contact" className="btn-outline">
              {heroData.secondaryBtn || "Get In Touch"}
            </Link>
          </div>
        </div>
      </section>

      
      <section className="hero-stats">
        {stats.map((item, index) => (
          <div className="stat" key={index}>
            <i className={item.icon}></i>
            <h3>{item.value}</h3>
            <p>{item.label}</p>
          </div>
        ))}
      </section>

      
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-sub">
            We offer a comprehensive range of development services to bring your
            ideas to life
          </p>

          <div className="services-grid">
            {services.map((service, index) => (
              <div className="service-card" key={index}>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="process-timeline container">
        <h2 className="section-title">Our Process</h2>
        <p className="section-sub">
          From concept to completion, we follow a transparent and efficient
          workflow.
        </p>

        <div className="timeline-grid">
          <div className="timeline-card">
            <div className="timeline-icon">
              <Search size={28} />
            </div>
            <h3>Discovery</h3>
            <p>
              We understand your vision, goals, and requirements through
              in-depth consultation.
            </p>
          </div>

          <div className="timeline-card">
            <div className="timeline-icon">
              <PenTool size={28} />
            </div>
            <h3>Design</h3>
            <p>
              Creating intuitive wireframes and stunning UI/UX designs that
              bring your ideas to life.
            </p>
          </div>

          <div className="timeline-card">
            <div className="timeline-icon">
              <Code2 size={28} />
            </div>
            <h3>Development</h3>
            <p>
              Building robust, scalable solutions using cutting-edge
              technologies and best practices.
            </p>
          </div>

          <div className="timeline-card">
            <div className="timeline-icon">
              <CheckCircle2 size={28} />
            </div>
            <h3>Testing</h3>
            <p>
              Rigorous quality assurance and testing to ensure flawless
              performance across all platforms.
            </p>
          </div>

          <div className="timeline-card">
            <div className="timeline-icon">
              <Rocket size={28} />
            </div>
            <h3>Launch</h3>
            <p>
              Seamless deployment and ongoing support to ensure your success in
              the digital world.
            </p>
          </div>
        </div>
      </section>

     
      <section className="featured-section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-sub">
            Take a look at some of our recent work that showcases our expertise
            and creativity
          </p>

          <div className="featured-grid">
            {featuredProjects.map((project, i) => (
              <div className="project-card" key={i}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tech-tags">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx}>{tech}</span>
                    ))}
                  </div>
                  <div className="project-buttons">
                    <a href={project.github} className="btn-outline">
                      Code
                    </a>
                    <a href={project.demo} className="btn-primary">
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="center-btn">
            <Link to="/portfolio" className="btn-primary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      
      <section className="home-cta">
        <div className="container cta-inner">
          <div>
            <h2>Ready to Start Your Project?</h2>
            <p>
              Let's work together to bring your vision to life. Contact us today
              for a free consultation.
            </p>
          </div>
          <Link to="/contact" className="btn-outline alt-cta">
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
