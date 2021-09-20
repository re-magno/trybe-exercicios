const statesList = ['', 'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'Go', 'Ma', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO']

const getStates = document.getElementById('estados');

// Função que cria as opções de estados

for (let index = 0; index < statesList.length; index += 1) {
  let createOptions = document.createElement('option');
  states.appendChild(createOptions).innerText = statesList[index];
  states.appendChild(createOptions).value = statesList[index];
}

