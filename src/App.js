import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.OnKeyUpHandler = this.OnKeyUpHandler.bind(this)
    this.state = { contador: 0 };
  };
  
  OnKeyUpHandler(event){
    let number_chars = event.target.value.length
    this.setState({
      contador: number_chars
    });

  }

  render() {
    return (
      <div className="container">
        <textarea rows="3" onChange={this.OnKeyUpHandler}></textarea>
        <div className="counter" >{this.state.contador}</div>
      </div>
    );
  }
}

export default App;
