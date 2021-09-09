// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:


let n = 5;
let symbol = '*';
let line = '';

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  line = line + symbol;
};
for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  console.log(line);
};
