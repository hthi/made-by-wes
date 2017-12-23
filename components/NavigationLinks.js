import React from 'react'
import { Link } from 'react-router-dom'

const NavigationLinks = () => {
  const curElement = document.activeElement;
  const links = document.getElementsByClassName('nav-link');

  for (let x = 0; x < links.length; x++) {
    if (links[x] === curElement) {
      links[x].parentElement.classList.add("active");
    } else {
      links[x].parentElement.classList.remove("active");
    }
  }

  return (
    <div className="links-container">
      <ul>
        <li className="active" key='home'><Link to='/' className="nav-link">HOME</Link></li>
        <li key='about'><Link to='/about' className="nav-link">ABOUT</Link></li>
        <li key='portfolio'><Link to='/portfolio' className="nav-link">PORTFOLIO</Link></li>
        <li key='contact'><Link to='/contact' className="nav-link">CONTACT</Link></li>
      </ul>
    </div>
  );
};

export default NavigationLinks;
