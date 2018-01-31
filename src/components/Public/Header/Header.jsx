import React, { Component } from 'react';
import './css/Header.css'
import logo from './img/logo.svg';


class Header extends Component {
  render() {
    return (
      <div className="Header">
        <header className="Logo">
          <img src={logo} alt="logo" />
          <h2 className="Header-title">Hellow world to React</h2>
          <p className="Header-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
      </div>
    );
  }
}

export default Header;
