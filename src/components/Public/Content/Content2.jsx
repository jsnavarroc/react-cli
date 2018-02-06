import React, { Component } from 'react';
import './css/Content.css'


class Content extends Component {
  constructor(){
    super()

    this.state = {
      count : 0,
      number1: 0,
      number2: 0,
      result: 0
    };

    this.handleCountClick = this.handleCountClick.bind(this);
    this.handleInputChanged = this.handleInputChanged.bind(this);
    this.handleResultClick = this.handleResultClick.bind(this);
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

  handleResultClick(e){
    this.setState({
      result : this.state.number1 + this.state.number2   
    })
  }

  handleInputChanged(e){
    if(e.target.id ==='number1'){
      this.setState({
        number1: Number(e.target.value)
      })
    }else{
      this.setState({
        number2: Number(e.target.value)
      })
    }
  }

  render() {
    return (
      <div className="Content">
        <h2>Count = { this.state.count }</h2>
        <p>
          <button id = 'add' onClick = {this.handleCountClick}>+</button>
          <button id = 'substract' onClick = {this.handleCountClick}>-</button>
          <button id = 'reset' onClick = {this.handleCountClick}>reset</button>
        </p>

        <h2>Calculator</h2>
        <p>
          <input id='number1' type="number" value = {this.state.number1} onChange = {this.handleInputChanged}/>
          +
          <input id='number2' type="number" value = {this.state.number2} onChange = {this.handleInputChanged}/>
          
          <button id = 'result' onClick = {this.handleResultClick} > = </button>

          { this.state.result }
        </p>
      </div>
    );
  }
}

export default Content;