import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyRoutes from './config/routes.js';
import Header from './components/Header.js';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          { MyRoutes }
        </div>
      </div>
    );
  }
}

export default App;
