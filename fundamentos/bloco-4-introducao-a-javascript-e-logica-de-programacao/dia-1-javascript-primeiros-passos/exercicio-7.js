let testGrade = 90

if (testGrade < 0 || testGrade > 100) {
  console.log ('Erro: Nota inválida')
} else if (testGrade >= 90) {
  console.log ('A');
} else if (testGrade >= 80) {
  console.log ('B');
} else if (testGrade >= 70) {
  console.log ('C');
} else if (testGrade >= 60) {
  console.log ('D');
} else if (testGrade >= 50) {
  console.log ('E');
} else {
  console.log ('F');
}
