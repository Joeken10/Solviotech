import React from "react";

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} className="project-image" />
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="tech-tags">
          {project.technologies.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>

        <div className="project-buttons">
          <a href={project.github} className="btn-outline" target="_blank" rel="noreferrer">
            💻 Code
          </a>
          <a href={project.demo} className="btn-primary" target="_blank" rel="noreferrer">
            🚀 Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
