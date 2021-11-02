import React from 'react';
import { Component } from 'react';
import './App.css';


// Utilizei a documentação para me auxiliar https://pt-br.reactjs.org/docs/lists-and-keys.html e este vídeo https://www.youtube.com/watch?v=6iJABCS34Jk&amp;feature=youtu.be


const tasks = ['Estudar Jest', 'Finalizar projeto', 'Estudar React', 'Fazer exercícios'];

const Task = tasks.map(
  (task) => <li>{task}</li>
)

class App extends Component {
  render() {
    return (
      <>
      <ul>{Task}</ul>
      </>
    );
  }
}

export default App;
