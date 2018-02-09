// Dependencies
import React, { Component } from 'react';
import propTypes from 'prop-types';

// Assets
import './css/App.css';

// Components
import Header from './Public/Header/Header'
import Content from './Public/Content/Content'
import Footer from './Public/Footer/Footer'

// Data
import options from './Private/Date/menu'

class App extends Component {
  static propTypes = {
    children : propTypes.object.isRequired
  }

  render() {
   const { children } = this.props; 
    return (
      <div className="App">
        <Header title = "jsnStore" options = {options} />  
        <Content body = {children} />
        <Footer copyright = '&copy; JSN 2018'/>
      </div>
    );
  }
}

export default App;
