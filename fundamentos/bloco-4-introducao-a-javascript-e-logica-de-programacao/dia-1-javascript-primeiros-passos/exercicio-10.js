const costPrice = 100 
const salePrice = 250 

if (costPrice < 0 || salePrice < 0 ) {
  console.log ("Erro: valor inválido");
} else {
  const tax = costPrice / 100 * 20 ;
  const totalCostPrice = costPrice + tax;
  const totalProfit = (salePrice - totalCostPrice) * 1000;
  console.log (totalProfit);
}
