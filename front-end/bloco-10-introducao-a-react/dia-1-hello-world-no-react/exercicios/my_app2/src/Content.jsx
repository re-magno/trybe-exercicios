import { Component } from "react";

export default class Content extends Component {
  render() {
    const conteudos = [
      {
        conteudo: 'High Order Functions',
        bloco: 8,
        status: 'Aprendido'
      },
      {
        conteudo: 'Composicao de Componentes',
        bloco: 11,
        status: 'Aprendendo',
      },
      {
        conteudo: 'Composicao de Estados',
        bloco: 12,
        status: 'Aprenderei'
      },
      {
        conteudo: 'Redux',
        bloco: 16,
        status: 'Aprenderei'
      },
    ];
    return (
      <section>
        {conteudos.map(({ conteudo, bloco, status})=> (
          <div key={conteudo}>
            <h4>{`O conteudo é: ${conteudo}`}</h4>
            <p>{`status: ${status}`}</p>
            <p>{`bloco: ${bloco}`}</p>
          </div>
        ))}
      </section>
    );
  }
}