// Dependecies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
// Assets
import './css/Header.css'
import logo from './img/logo.svg';


class Header extends Component {

  static propTypes = {
    title : PropTypes.string.isRequired,
    options : PropTypes.array.isRequired
  }

  handleClick(e) {
   console.log(e.target.to);
  }
  render() {
    const { title, options } = this.props;
    
    return (
      <div className="Header">
        <header className="Logo">
          <img src={logo} alt="logo" />
          <h2 className="Header-title">{ title }</h2>
          <ul className='Menu'>
             {
               options &&  options.map(
                 (option , key) =>(
                  <li style={{display: 'inline-block'}} key={key} >
                      <Link to={option.url} onClick={this.handleClick} >
                        {option.title}
                      </Link>
                  </li>
                 )
              )
             }
            </ul>
        </header>
      </div>
    );
  }
}

export default Header;
