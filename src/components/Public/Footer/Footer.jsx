// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Assets
import './css/Footer.css'


class Footer extends Component {
  static propTypes = {
    copyright : PropTypes.string.isRequired
  }
  render() {
    // Coloca lo de adentro de llaves por defecto en caso de no llegar la propiedad
    const {copyright = '&copy; React 2018'} = this.props;
    return (
      <footer  className="Footer">
      {/*Esta forma se muesta html de forma insegura*/}
            <p dangerouslySetInnerHTML = {{__html: copyright}}/>  
      </footer>
    );
  }
}

export default Footer;
