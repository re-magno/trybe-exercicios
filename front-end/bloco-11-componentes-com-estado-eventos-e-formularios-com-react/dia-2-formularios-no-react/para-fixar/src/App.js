import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      idade : '',
    }

  }

  handleChange(event) {
    this.setState({
      idade: event.target.value,
    });
  }

  render() {
    return(
      <div>
        <h1>Meu Formulário</h1>
        <form className='form'>
          <label>Deseja participar da palestra?
            <select name='participar' >
              <option value= 'sim' >Sim</option>
              <option value= 'nao' >Não</option>
            </select>
          </label>
          <br />
          <label>Nome:
            <input
                type="text"
                name="name"
              />
            </label>
            <br />
          <label>Idade:
            <input
                type="text"
                name="idade"
                value = {this.state.idade}
                onChange = {this.handleChange}
              />
            </label>
            <br />
            <label>Receber e-mail
              <input
              type="checkbox"
              name="vaiComparecer"
              />
          </label>
          <br />
          <label>
            Comentário:
            <br />
              <textarea name="" />
          </label>
        </form>
      </div>
    );
  }
}

export default App;
