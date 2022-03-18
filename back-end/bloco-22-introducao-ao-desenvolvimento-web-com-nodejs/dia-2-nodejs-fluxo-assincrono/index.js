// Exercise 1
function calculate(param1, param2, param3) {
  return new Promise((resolve, reject) => {
    if (typeof param1 !== 'number' || typeof param2 !== 'number' || typeof param3 !== 'number')
    reject('Informe apenas números');

    const result = (param1 + param2) * param3;

    if(result < 50) {
      return reject('Valor muito baixo')
    }

    resolve(`Resultado: ${result}`);
  });
}

// Exercise 2
function getRandom() {
  return Math.floor(Math.random() * 100 + 1)
}


function callCalculateWhithThen() {
  const params = [];

  for(let i = 0; i <= 3; i++) {
    params.push(getRandom())
  }

  calculate(...params)
    .then(resolve => console.log(resolve))
    .catch(error => console.log(error));
}


calculate();

// Exercise 3






