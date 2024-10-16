import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import "./WorkCardStyles.css";

const WorkCard = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/projects/')
      .then(response => response.json())
      .then(data => setProjects(data));
  }, []);

  return (
    <div className="WorkCard-Container">
      <h1 className="Project-Heading">Projects</h1>
      <div className="Project-Container">
        {projects.map(project => (
          <div className="Project-Card" key={project.id}>
            <img src={project.image} alt={project.title} />
            <h2 className="Project-Title">{project.title}</h2>
            <div className="Pro-Details">
              <p>{project.description}</p>
              <div className="Pro-Buttons">
                <Link to={project.link_view} className="btn">View</Link>
                <Link to={project.link_source} className="btn">Source</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkCard;
