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
    console.log('Clicou no botão 1!');
  }
  
  handleClick2() {
    console.log('Clicou no botão 2!');
  }
  
  handleClick3() {
    console.log('Clicou no botão 3!');
  }

  render() {
    return (
    <>
      <button onClick={ this.handleClick1 }>Botão 1</button>
      <button onClick={ this.handleClick2 }>Botão 2</button>
      <button onClick={ this.handleClick3 }>Botão 3</button>
    </>
    );
  }
}

export default App;