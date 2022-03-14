function 
calculate(param1, param2, param3) {
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


calculate('num', 10, 5)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error));
  

calculate(1, 5, 1)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error));


calculate(20, 10, 5)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error));