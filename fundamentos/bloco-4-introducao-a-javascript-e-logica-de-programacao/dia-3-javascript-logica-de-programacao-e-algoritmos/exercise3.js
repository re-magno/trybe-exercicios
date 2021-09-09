// 3- Agora inverta o lado do triângulo. Por exemplo:
// n = 5

//     *
//    **
//   ***
//  ****
// *****

let base = 5;
let symbol = '*';
let imputLine = '';
let position = base - 1; 

for (let baseIndex = 0; baseIndex < base; baseIndex += 1) {
  for (let index = 0; index < base; index += 1) {
    if (index < position) {
      imputLine = imputLine + ' ';
    } else {
      imputLine = imputLine + symbol;
    }
  }
  console.log (imputLine)
  imputLine = '';
  position -=1;
};