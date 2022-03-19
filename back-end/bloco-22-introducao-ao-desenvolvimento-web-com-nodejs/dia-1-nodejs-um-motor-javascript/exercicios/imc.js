const readline = require('readline-sync');

const peso = readline.questionInt('Qual o seu peso? (em kg)');
const altura = readline.questionFloat('Qual é a sua altura? (ex. 1.82)');
function calculaImc () {
  const imc = (peso / Math.pow(altura, 2)).toFixed(2);

  console.log(`Peso: ${peso}, Altura: ${altura}, IMC: ${imc}`);

  switch (imc) {
    case (imc < 18.5):
      console.log('Situação: Abaixo do peso (magreza)');
      break;
    case (imc < 25):
      console.log('Situação: Peso normal');
      break;
    case (imc < 30):
      console.log('Situação: Acima do peso (sobrepeso)');
      break;
    case (imc < 35):
      console.log('Situação: Obesidade grau I');
      break;
    case (imc < 40):
      console.log('Obesidade grau II ');
      break;
    default:
      console.log ('Obesidade graus III e IV');
  }
}

calculaImc();
