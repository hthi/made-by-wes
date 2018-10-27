import React from 'react';
import { Link } from 'react-router-dom';

export default class Projects extends React.Component {
  render() {
    return (
      <div id="projects" className="content-container project">
        <h2>Check out some of my projects on Instagram!</h2>
        <p>Follow me <a href="https://www.instagram.com/made_by_wes/">@made_by_wes</a></p>
        <div id="instafeed" className="instafeed-content"></div>
      </div>
    );
  };
}
