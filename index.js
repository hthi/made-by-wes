import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import img from './wood_background2.jpg'

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="body">
          <div className="content-container">
            <div className="header-content">
              <h1>YOUR FURNITURE, YOUR WAY</h1>
              <h2>Made By Wes</h2>
            </div>
            <p>I believe that hand made furniture is something everyone should own and be proud of.</p>
            <p>I believe that everyone has a style and look that are unique to them.</p>
            <p>I believe that I can help bring that to life through the furniture you surround yourself with.</p>
          </div>
        </div>
        <div className="links-container">
          <ul>
            <li><a className="effect-2" href="#">ABOUT</a></li>
            <li><a className="effect-2" href="#">PORTFOLIO</a></li>
            <li><a className="effect-2" href="#">CONTACT</a></li>
          </ul>
        </div>
        <div className="footer">

        </div>
      </div>
    );
  }
}

ReactDOM.render(< App/>, document.getElementById('main'));
