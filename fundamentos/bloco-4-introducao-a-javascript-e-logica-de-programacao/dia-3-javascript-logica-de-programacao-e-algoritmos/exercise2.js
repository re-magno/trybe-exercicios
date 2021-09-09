// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
// n = 5

// *
// **
// ***
// ****
// *****

let base = 5;
let symbol = '*';
let imputLine = '';

for (let baseIndex = 0; baseIndex < base; baseIndex += 1) {
  imputLine = imputLine + symbol;
  console.log (imputLine)
};