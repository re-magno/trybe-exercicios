import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    this.state = {
      btn1: 0,
      btn2: 0,
      btn3: 0,
    };

  }

  handleClick1() {
    this.setState((e, _props) => ({btn1: e.btn1 + 1}))
  }
  
  handleClick2() {
    this.setState((e, _props) => ({btn2: e.btn2 + 1}))
  }
  
  handleClick3() {
    this.setState((e, _props) => ({btn3: e.btn3 + 1}))
  }

  render() {
    return (
    <>
      <button onClick={ this.handleClick1 }>{this.state.btn1}</button>
      <button onClick={ this.handleClick2 }>{this.state.btn2}</button>
      <button onClick={ this.handleClick3 }>{this.state.btn3}</button>
    </>
    );
  }
}

export default App;