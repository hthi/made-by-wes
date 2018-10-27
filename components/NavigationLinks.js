import React from 'react'
import { Link } from 'react-router-dom'

export default class NavigationLinks extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showHamburger: false,
      activeLink: 'home'
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

  showActiveLink(value) {
    const activeLink = document.getElementById(value);

    activeLink.scrollIntoView(true);
    this.setState({
      activeLink: value
    })
  }

  render() {
    const hamburgerClass = this.state.showHamburger ? "" : "hide";
    const curElement = document.activeElement;

    // const links = document.getElementsByClassName('nav-link');
    //
    // for (let x = 0; x < links.length; x++) {
    //   if (links[x] === curElement) {
    //     links[x].parentElement.classList.add("active");
    //   } else {
    //     links[x].parentElement.classList.remove("active");
    //   }
    // }

    return (
      <div className="main-nav">
        <div className="links-container">
          <ul>
            <li id="home" className={this.state.activeLink === "home" ? "active" : ""} key='home'><a onClick={() => this.showActiveLink('home')} className="nav-link">HOME</a></li>
            <li id="about" className={this.state.activeLink === "about" ? "active" : ""} key='about'><a onClick={() => this.showActiveLink('about')} className="nav-link">ABOUT</a></li>
            <li id="projects" className={this.state.activeLink === "projects" ? "active" : ""} key='projects'><a onClick={() => this.showActiveLink('projects')} className="nav-link">PORTFOLIO</a></li>
            <li id="contact" className={this.state.activeLink === "contact" ? "active" : ""} key='contact'><a onClick={() => this.showActiveLink('contact')} className="nav-link">CONTACT</a></li>
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
