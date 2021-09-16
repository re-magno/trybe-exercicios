const statesList = ['', 'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'Go', 'Ma', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO']

const getStates = document.getElementById('estados');

function addOptions () {
  statesList.forEach((state) => {
    option = new Option(state, state.toLowerCase());
    getStates.options[getStates.options.length] = option;
  });
}
addOptions()