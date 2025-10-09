import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import "./Portfolio.css";

const allProjects = [
  {
    title: "E-Commerce Platform",
    description:
      "A comprehensive e-commerce solution with payment integration, inventory management, and an admin dashboard.",
    technologies: ["React", "Flask", "PostgreSQL", "Stripe", "CSS"],
    image: "https://source.unsplash.com/random/800x600?ecommerce",
    github: "#",
    demo: "#",
    category: "Web Development",
  },
  {
    title: "Task Management App",
    description:
      "A modern task management tool featuring real-time collaboration, workspaces, and analytics.",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    image: "https://source.unsplash.com/random/800x600?task",
    github: "#",
    demo: "#",
    category: "Mobile Development",
  },
  {
    title: "Analytics Dashboard",
    description:
      "Interactive business intelligence dashboard with charts, KPIs, and live data updates.",
    technologies: ["React", "D3.js", "Python", "FastAPI", "Chart.js"],
    image: "https://source.unsplash.com/random/800x600?dashboard",
    github: "#",
    demo: "#",
    category: "Data Visualization",
  },
  {
    title: "AI Chat Assistant",
    description:
      "A conversational AI chatbot built using OpenAI’s GPT API for customer support automation.",
    technologies: ["React", "Flask", "OpenAI API", "Tailwind"],
    image: "https://source.unsplash.com/random/800x600?ai,chatbot",
    github: "#",
    demo: "#",
    category: "AI Solutions",
  },
  {
    title: "Portfolio Website",
    description:
      "Responsive and elegant portfolio website to showcase projects and skills.",
    technologies: ["React", "CSS", "Vite", "EmailJS"],
    image: "https://source.unsplash.com/random/800x600?portfolio,website",
    github: "#",
    demo: "#",
    category: "Web Development",
  },
  {
    title: "IoT Device Monitor",
    description:
      "Web app for real-time monitoring of IoT devices with MQTT and Flask backend.",
    technologies: ["Flask", "MQTT", "React", "WebSockets"],
    image: "https://source.unsplash.com/random/800x600?iot,devices",
    github: "#",
    demo: "#",
    category: "IoT",
  },
  {
    title: "Smart Expense Tracker",
    description:
      "Track expenses, generate insights, and manage budgets using AI-based categorization.",
    technologies: ["React", "Node.js", "TensorFlow.js", "MongoDB"],
    image: "https://source.unsplash.com/random/800x600?finance,app",
    github: "#",
    demo: "#",
    category: "Mobile Development",
  },
  {
    title: "Cybersecurity Dashboard",
    description:
      "Visual monitoring system showing live security alerts and analytics for enterprise networks.",
    technologies: ["React", "Chart.js", "Python", "FastAPI"],
    image: "https://source.unsplash.com/random/800x600?cybersecurity,dashboard",
    github: "#",
    demo: "#",
    category: "Data Visualization",
  },
  {
    title: "Weather Forecast App",
    description:
      "Minimal weather app that provides real-time conditions and 7-day forecasts using OpenWeather API.",
    technologies: ["React", "CSS", "API", "JavaScript"],
    image: "https://source.unsplash.com/random/800x600?weather,app",
    github: "#",
    demo: "#",
    category: "Web Development",
  },
];

function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const categories = [
    "All",
    "Web Development",
    "Data Visualization",
    "Mobile Development",
    "AI Solutions",
    "IoT",
  ];

  const filteredProjects = allProjects.filter((p) => {
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
        {filteredProjects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
