module.exports = (num) => {
  if(num > 0) {
    return 'positivo';
  }

  if(num < 0) {
    return 'negativo';
  }

  if(num === 0){
    return 'neutro';
  }
}