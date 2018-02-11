// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import './css/Home.css'

class Home extends Component {
  static PropTypes = {
    isMobile : PropTypes.bool
  };

  render() {
    const { isMobile } = this.props;

    return (
      <div className="Home">
        <h1>Home Page 2</h1>
        <p>Hola</p>
        <p>
          {isMobile ? 'Mobile Device' : 'Desktop Device'}
        </p>
      </div>
    );
  }
}

export default connect(state => ({
  isMobile: state.device.isMobile
}), null)(Home);


