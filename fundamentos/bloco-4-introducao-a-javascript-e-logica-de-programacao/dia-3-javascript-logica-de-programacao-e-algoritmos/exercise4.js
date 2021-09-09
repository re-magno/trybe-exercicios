// 4- Depois, faça uma pirâmide com n asteriscos de base:
// n = 5

//   *
//  ***
// *****

let base = 5;
let symbol = '*';
let imputLine = '';
let centralPosition = (base + 1 ) / 2;
let rightSpace = centralPosition
let leftSpace = centralPosition

for (let baseIndex = 0; baseIndex <= centralPosition; baseIndex += 1) {
  for (let index = 0; index <= base; index += 1) {
    if (index > leftSpace && index < rightSpace) {
      imputLine = imputLine + symbol;
    } else {
      imputLine = imputLine + " ";
    }
  }
  console.log (imputLine)
  imputLine = '';
  rightSpace += 1;
  leftSpace -= 1;
};