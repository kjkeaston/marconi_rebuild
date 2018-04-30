import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './marconi_logo.png';


class Header extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="row app-header">
        <div className="col-sm-6">
          <h1 className="text-left"><img src={logo} alt="logo" />Marconi</h1>
        </div>
        <div className="col-sm-6">
          <ul className="navigation">
            <li>Whitepaper</li>
            <li>Developers</li>
            <li>Core Tech</li>
            <li>Team</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Header