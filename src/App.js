import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(){
    super()  
    this.state = {
      counter: 0
    }
    
    this.increment = this.increment.bind(this);
  }
  


  render() {
    return (
      <div>
        <span className="value">{this.state.counter}</span>
        <button id="inc" onClick={this.increment}>Incrementa</button>
      </div>
    );
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    });
  }
}

export default App;
