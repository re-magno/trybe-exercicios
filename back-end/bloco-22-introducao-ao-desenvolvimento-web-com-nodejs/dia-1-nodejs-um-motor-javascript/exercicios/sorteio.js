const readline = require('readline-sync');

function random() {
  return parseInt(Math.random() * 10);
}

function resultado(numSorteado, numEscolhido) {
  if(numSorteado === numEscolhido) {
    return console.log ("Parabéns, número correto!");
  } return console.log (`Opa, não foi dessa vez. O número era ${numSorteado}`);
}

function sorte() {
  const numEscolhido = readline.questionInt('Escolha um número de 0 a 10 ');
  const numSorteado = random();

  resultado(numSorteado, numEscolhido);

  const jogar = readline.question('Deseja jogar novamente? Digite s ou n: ')

  if(jogar !== 's') return console.log('Até a próxima!');
  sorte();
}

sorte()
