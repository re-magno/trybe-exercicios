let chessPiece = 'Rainha';

switch(chessPiece.toLowerCase()) {
  case 'rei':
   console.log ("Rei -> Uma casa em qualquer direção");
       break;
  case 'rainha':
    console.log ("Rainha -> Em diagonal, horizontal e vertical");
    break;
  case 'bispo':
    console.log ("Bispo -> Diagonal");
    break;
  case 'torre':
    console.log ("Torre -> Horizontal e vertical ");
    break;
  case 'cavalo':
    console.log ("Cavalo -> Se move em formato de L. Pode ser tanto duas casas para frente e uma para a direita ou para a esquerda, quanto uma casa para a esquerda ou para a direita e duas para frente. Pode pular peças no caminho");
    break;
  case 'peão':
    console.log ("Peão -> No primeiro movimento pode andar tanto 1 como 2 casas para frente. Depois disso só pode se mover 1 casa para frente a cada rodada");
    break;
  default:
    console.log ("Erro: peça inválida");
};