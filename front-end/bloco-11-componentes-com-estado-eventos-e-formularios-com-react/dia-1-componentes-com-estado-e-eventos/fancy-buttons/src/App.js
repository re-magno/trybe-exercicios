import React from 'react';

class App extends React.Component {
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
        <button onClick={ this.handleClick2 }>Botão 2 </button>
        <button onClick={ this.handleClick3 }>Botão 3 </button>
      </>
    )
  }
}

export default App;
