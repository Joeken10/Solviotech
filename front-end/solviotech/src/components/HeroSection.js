import React from "react";
import { Link } from "react-router-dom";
import "./HeroSection.css";

const HeroSection = () => {
  const heroImg =
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&q=80&auto=format&fit=crop";

  const featuredProjects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React and Flask.",
      technologies: ["React", "Flask", "PostgreSQL", "Tailwind CSS"],
      image: "https://source.unsplash.com/random/800x600?ecommerce",
      github: "#",
      demo: "#",
    },
    {
      title: "Task Management App",
      description: "Modern task management application with real-time collaboration.",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      image: "https://source.unsplash.com/random/800x600?taskmanagement",
      github: "#",
      demo: "#",
    },
  ];

  return (
    <div className="hero-wrapper">
      
      <section className="hero" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="overlay"></div>
        <div className="hero-content">
          <h4>Crafting Digital Solutions That</h4>
          <h2>
            <span>Transform Your Business</span>
          </h2>
          <p>
            We are <strong>Solviotech</strong> — a passionate team of developers
            creating innovative web and mobile applications that drive results
            and exceed expectations.
          </p>

          <div className="hero-buttons">
            <Link to="/portfolio" className="btn-primary">
              View Our Work →
            </Link>
            <Link to="/contact" className="btn-outline">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      
      <section className="hero-stats">
        <div className="stat">
          <i className="fas fa-briefcase"></i>
          <h3>150+</h3>
          <p>Projects Completed</p>
        </div>

        <div className="stat">
          <i className="fas fa-users"></i>
          <h3>85+</h3>
          <p>Happy Clients</p>
        </div>

        <div className="stat">
          <i className="fas fa-code"></i>
          <h3>20+</h3>
          <p>Technologies</p>
        </div>

        <div className="stat">
          <i className="fas fa-smile"></i>
          <h3>99%</h3>
          <p>Satisfaction Rate</p>
        </div>
      </section>

      
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-sub">
            We offer a comprehensive range of development services to bring your ideas to life
          </p>

          <div className="services-grid">
            <div className="service-card">
              <h3>Web Development</h3>
              <p>Custom web applications built with modern frameworks and best practices.</p>
            </div>

            <div className="service-card">
              <h3>Mobile Development</h3>
              <p>Native and cross-platform mobile apps that deliver exceptional user experiences.</p>
            </div>

            <div className="service-card">
              <h3>UI/UX Design</h3>
              <p>Beautiful, intuitive designs that enhance user engagement and satisfaction.</p>
            </div>

            <div className="service-card">
              <h3>Backend Solutions</h3>
              <p>Robust, scalable backend systems to power your applications.</p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="featured-section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-sub">
            Take a look at some of our recent work that showcases our expertise and creativity
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
              Let's work together to bring your vision to life. Contact us today for a free consultation.
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
