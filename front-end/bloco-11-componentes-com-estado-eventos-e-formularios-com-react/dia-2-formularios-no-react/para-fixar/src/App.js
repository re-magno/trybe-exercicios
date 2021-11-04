import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      participar: '',
      name: '',
      idade : '',
      recebe_email: false,
      comentario: '',
    }

  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return(
      <div>
        <h1>Meu Formulário</h1>
        <form className='form'>
          <label htmlFor= 'participar'>Deseja participar da palestra?
            <select 
              name='participar'
              id = 'participar'
              value = {this.state.participar}
              onChange = {this.handleChange} 
            >
              <option />
              <option value= 'nao' >Não</option>
              <option value= 'sim' >Sim</option>
            </select>
          </label>
          <br />
          <label htmlFor = "name">Nome:
            <input
                type="text"
                name="name"
                id = "name"
                value = {this.state.name}
                onChange = {this.handleChange}
              />
            </label>
            <br />
          <label htmlFor = "idade">Idade:
            <input
                type="text"
                name="idade"
                id = "idade"
                value = {this.state.idade}
                onChange = {this.handleChange}
              />
            </label>
            <br />
            <label htmlFor = "email">Receber e-mail
              <input
              type="checkbox"
              name="recebe_email"
              id = "recebe_email"
              value = {this.state.email}
                onChange = {this.handleChange}
              />
          </label>
          <br />
          <label htmlFor = "comentario">
            Comentário:
            <br />
              <textarea 
                name="comentario"
                id = "comentario"
                value = {this.state.comentario}
                onChange = {this.handleChange}
              />
          </label>
          <br />
          <input type="file" />
        </form>
      </div>
    );
  }
}

export default App;
