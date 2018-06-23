import React from 'react'
import { Switch, Route } from 'react-router-dom'
import About from './about.js';
import Projects from './projects.js';
import Contact from './contact.js';
import Home from './home.js';

const Main = () => (
  <main>
    <Home />
    <About />
    <Projects />
    <Contact />
  </main>
)

export default Main;
