// Dependecies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Assets
import './css/Header.css'
import logo from './img/logo.svg';


class Header extends Component {
  static propTypes = {
    title : PropTypes.string.isRequired,
    options : PropTypes.array.isRequired
  }
  render() {
    const { title, options } = this.props;
    
    return (
      <div className="Header">
        <header className="Logo">
          <img src={logo} alt="logo" />
          <h2 className="Header-title">{ title }</h2>
          <ul className='Menu'>
             {options &&  options.map((option , key) =>(
                  <li style={{display: 'inline-block'}} key={key} >{option.title}</li>
               ))
             }
            </ul>
        </header>
      </div>
    );
  }
}

export default Header;
