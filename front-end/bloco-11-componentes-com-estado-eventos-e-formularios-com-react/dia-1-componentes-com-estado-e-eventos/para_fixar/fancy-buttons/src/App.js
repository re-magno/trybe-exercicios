import React from 'react';

function handleClick() {
  console.log('Clicou no botão!')
}

class App extends React.Component {
  render() {
    return (<button onClick={handleClick}>Meu botão</button>)
  } 
}

export default App;
