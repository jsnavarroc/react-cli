// Dependencies
import React, { Component } from 'react';

// Assets
import './css/App.css';

// Components
import Header from './Public/Header/Header'
import Content from './Public/Content/Content'
import Footer from './Public/Footer/Footer'

// Data
import options from './Private/Date/menu'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title = "jsnStore" options = {options} />  
        <Content/>
        <Footer copyright = '&copy; JSN 2018'/>
      </div>
    );
  }
}

export default App;
