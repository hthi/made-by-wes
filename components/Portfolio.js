import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Projects from './Projects.js';
import Project1 from './Project1.js';
import Project2 from './Project2.js';

const Portfolio = () => (
  <Switch>
    <Route exact path='/portfolio' component={Projects}/>
    <Route path='/portfolio/project1' component={Project1}/>
    <Route path='/portfolio/project2' component={Project2}/>
  </Switch>
);

export default Portfolio;
