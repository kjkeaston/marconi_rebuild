import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home.js';
import Team from '../components/Team.js';
import Whitepaper from '../components/Whitepaper';

export default (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route exact path='/team' component={Team}/>
    <Route exact path='/whitepaper' component={Whitepaper}/>
  </Switch>
  )