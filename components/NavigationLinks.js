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
            <li className="active" key='home'><Link to='/' className="nav-link">HOME</Link></li>
            <li key='about'><Link to='/about' className="nav-link">ABOUT</Link></li>
            <li key='portfolio'><Link to='/portfolio' className="nav-link">PORTFOLIO</Link></li>
            <li key='contact'><Link to='/contact' className="nav-link">CONTACT</Link></li>
          </ul>
        </div>
        <div className="hamburger-menu" onClick={() => this.toggleMenu()}>
          <i className="fa fa-bars" aria-hidden="true"/>
          <ul className={hamburgerClass}>
            <li className="active" key='home'><Link to='/' className="nav-link">HOME</Link></li>
            <li key='about'><Link to='/about' className="nav-link">ABOUT</Link></li>
            <li key='portfolio'><Link to='/portfolio' className="nav-link">PORTFOLIO</Link></li>
            <li key='contact'><Link to='/contact' className="nav-link">CONTACT</Link></li>
          </ul>
        </div>
      </div>
    );
  }
};
