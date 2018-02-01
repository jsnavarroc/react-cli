import React, { Component } from 'react';
import './css/Content.css'


class Content extends Component {
  constructor(){
    super()

    this.state = {
      count : 0
    };

    this.handleCountClick = this.handleCountClick.bind(this);
  }
  
  componentDidMount(){
    this.setState({
      count : 1
    })
  }


  handleCountClick(e){
    if(e.target.id === 'add'){
      this.setState({
        count : this.state.count + 1
      })
    }else if(e.target.id === 'substract' && e.target.id >= 0){
        this.setState({
          count : this.state.count - 1
        })
      }else{
          this.setState({
            count : 0
          })

      }

  }
  render() {
    return (
      <div className="Content">
        <h2>Count = { this.state.count }</h2>
        <button id = 'add' onClick = {this.handleCountClick}>+</button>
        <button id = 'substract' onClick = {this.handleCountClick}>-</button>
        <button id = 'reset' onClick = {this.handleCountClick}>reset</button>
      </div>
    );
  }
}

export default Content;
