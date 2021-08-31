const angleA = 60;
const angleB = 90;
const angleC = 30;

let sumAngles = angleA + angleB + angleC;

let allAnglesPositives = angleA > 0 && angleB > 0 && angleC > 0;

if (allAnglesPositives) {
  if (sumAngles === 180) {
    console.log (true);
  } else {
    console.log (false);
  };
} else {
  console.log ('Erro: ângulo invalido');
};
