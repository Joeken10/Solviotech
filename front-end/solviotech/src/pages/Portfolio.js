import React, { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import "./Portfolio.css";

function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  const categories = [
    "All",
    "Web Development",
    "Data Visualization",
    "Mobile Development",
    "AI Solutions",
    "IoT",
  ];

  const filteredProjects = projects.filter((p) => {
    const matchCategory = filter === "All" || p.category === filter;
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="portfolio-page">
      <h1>
        Our <span>Projects</span>
      </h1>

      <div className="portfolio-controls">
        <input
          type="text"
          placeholder="Search projects..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="filters">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={filter === cat ? "active" : ""}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
