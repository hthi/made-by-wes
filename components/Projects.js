import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => (
  <div className="content-container">
    <h2>Check out some of my projects!</h2>
    <div className="projects-container">
      <div className="project-container" key='project1'><Link to='/portfolio/project1'><img className="project-img" src="../assets/project_1.0.jpg"/></Link></div>
      <div className="project-container" key='project2'><Link to='/portfolio/project2'><img className="project-img" src="../assets/project_2.0.jpg"/></Link></div>
    </div>
  </div>
);

export default Portfolio;
