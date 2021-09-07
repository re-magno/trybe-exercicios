// Iremos utilizar esse array para realizar os exercícios do 1 ao 7:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1 Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

for (let number of numbers) {
  console.log (number);
}

// 2 Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let sum = 0 
for (i = 0; i < numbers.length; i +=1) {
  sum = sum + numbers[i]
}
console.log (sum)

// 3 Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

let numberOfElements = numbers.length
let arithmeticAverage = sum / numberOfElements
console.log (arithmeticAverage)

// 4 Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

if (arithmeticAverage > 20) {
  console.log ("valor maior que 20")
} else {
console.log ("valor menor ou igual a 20")
}

// 5 Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let higherNumber = 0 
for (i = 0; i < numbers.length; i +=1) {
  if (numbers[i] > higherNumber) {
    higherNumber = numbers[i]
  }
}
console.log (higherNumber)

// 6 Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let oddNumber = 0 
for (i = 0; i < numbers.length; i +=1) {
  if (numbers[i] % 2 !== 0 ) {
    oddNumber += 1 
  }
}
if (oddNumber === 0 ) {
  console.log ("nenhum valor ímpar encontrado")
} else {
  console.log (oddNumber)
}

// 7 Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let smallestNumber = numbers [0]
for (i = 0; i < numbers.length; i +=1) {
  if (numbers[i] < smallestNumber) {
    smallestNumber = numbers[i]
  }
}
console.log (smallestNumber)
