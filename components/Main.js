import React from 'react'
import { Switch, Route } from 'react-router-dom'
import About from './about.js';
import Portfolio from './portfolio.js';
import Contact from './contact.js';
import Home from './home.js';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/portfolio' component={Portfolio}/>
      <Route path='/contact' component={Contact}/>
    </Switch>
  </main>
)

export default Main;
