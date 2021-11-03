import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    this.changeColor = this.changeColor.bind(this);
    this.state = {
      btn1: 0,
      btn2: 0,
      btn3: 0,
    };

  }

  handleClick1() {
    this.setState((e, _props) => ({btn1: e.btn1 + 1}), () => {
      console.log(`Botão 1 ${this.changeColor(this.state.btn1)}`);
    })
  }
  
  handleClick2() {
    this.setState((e, _props) => ({btn2: e.btn2 + 1}), () => {
      console.log(`Botão 2 ${this.changeColor(this.state.btn2)}`);
    })
  }
  
  handleClick3() {
    this.setState((e, _props) => ({btn3: e.btn3 + 1}), () => {
      console.log(`Botão 3 ${this.changeColor(this.state.btn3)}`);
    })
  }

  changeColor (num) {
    return num % 2 === 0 ? 'green' : 'white';
  }

  render() {
    const { btn1, btn2, btn3 } = this.state;
    return (
    <>
      <button 
        onClick={ this.handleClick1 }
        style={{ backgroundColor: this.changeColor(btn1) }}
      >
        {btn1}
      </button>

      <button 
        onClick={ this.handleClick2 }
        style={{ backgroundColor: this.changeColor(btn2) }}
      >
        {btn2}
      </button>

      <button 
        onClick={ this.handleClick3 }
        style={{ backgroundColor: this.changeColor(btn3) }}
      >
        {btn3}
      </button>


    </>
    );
  }
}

export default App;