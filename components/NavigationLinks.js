import React from 'react'
import { Link } from 'react-router-dom'

export default class NavigationLinks extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showHamburger: false
    };
  };

  toggleMenu() {
    if (this.state.showHamburger && this.state.showHamburger === true) {
      this.setState({
        showHamburger: false
      });
    } else {
      this.setState({
        showHamburger: true
      });
    }
  }

  render() {
    const hamburgerClass = this.state.showHamburger ? "" : "hide";
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
      <div className="main-nav">
        <div className="links-container">
          <ul>
            <li className="active" key='home'><a onClick={() => {document.getElementById('home').scrollIntoView(true)}} className="nav-link">HOME</a></li>
            <li key='about'><a onClick={() => {document.getElementById('about').scrollIntoView(true)}} className="nav-link">ABOUT</a></li>
            <li key='projects'><a onClick={() => {document.getElementById('projects').scrollIntoView(true)}} className="nav-link">PORTFOLIO</a></li>
            <li key='contact'><a onClick={() => {document.getElementById('contact').scrollIntoView(true)}} className="nav-link">CONTACT</a></li>
          </ul>
        </div>
        <div className="hamburger-menu" onClick={() => this.toggleMenu()}>
          <i className="fa fa-bars" aria-hidden="true"/>
          <ul className={hamburgerClass}>
            <li className="active" key='home'><a onClick={() => {document.getElementById('home').scrollIntoView(true)}} className="nav-link">HOME</a></li>
            <li key='about'><a onClick={() => {document.getElementById('about').scrollIntoView(true)}} className="nav-link">ABOUT</a></li>
            <li key='projects'><a onClick={() => {document.getElementById('projects').scrollIntoView(true)}} className="nav-link">PORTFOLIO</a></li>
            <li key='contact'><a onClick={() => {document.getElementById('contact').scrollIntoView(true)}} className="nav-link">CONTACT</a></li>
          </ul>
        </div>
      </div>
    );
  }
};
