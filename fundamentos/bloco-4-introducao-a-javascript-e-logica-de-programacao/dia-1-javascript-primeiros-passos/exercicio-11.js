let salarioBruto = 3000.00

// calcula o valor do INSS
  let valorDoInss = 0;
  if (salarioBruto <= 1556.94) { 
    valorDoInss = salarioBruto / 100 * 8
  } else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    valorDoInss = salarioBruto / 100 * 9
  } else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    valorDoInss = salarioBruto / 100 * 11
  } else 
    valorDoInss = 570.88

// calcula o salário bruto - o valor do INSS 
let salarioComDescontoInss = salarioBruto - valorDoInss;

//função que calcula a alíquota do IRPF
  let aliquotaDoIrpf = [];
  if (salarioComDescontoInss <= 1903.98) {
    let aliquotaDoIr = [0, 0]
  } else if (salarioComDescontoInss <= 2826.65) {
    aliquotaDoIrpf = [7.5, 142.80]
  } else if (salarioComDescontoInss <= 3751.05) {
    aliquotaDoIrpf = [15, 354.80]
  } else if (salarioComDescontoInss <= 4664.68) {
    aliquotaDoIrpf = [22.5 , 636.13]
  } else 
    aliquotaDoIrpf = [27.5, 869.36]


valorDoIrpf = salarioComDescontoInss / 100 * aliquotaDoIrpf[0] - aliquotaDoIrpf[1];
salarioLiquido = salarioComDescontoInss - valorDoIrpf;

console.log("R$ " + salarioLiquido);