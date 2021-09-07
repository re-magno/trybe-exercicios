// 8 Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
let arrNumbers = []

for (let index= 1; index <=25 ; index += 1) {
  arrNumbers.push (index) 
}
console.log (arrNumbers)

// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
for (let index = 0; index < arrNumbers.length; index += 1) {
  console.log(arrNumbers[index] / 2);
};