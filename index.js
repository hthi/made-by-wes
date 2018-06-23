import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './style.scss';
import App from './components/App';

window.sr = ScrollReveal();

render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));

sr.reveal('#home');
sr.reveal('#about');
sr.reveal('#projects');
sr.reveal('#contact');
