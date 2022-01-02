#### Para fixar - Callbacks

Agora, faça estes exercícios de fixação:

**1 -** No código abaixo você tem a função  `getUser`  , que retorna uma pessoa qualquer. Complete a função  `getUser`  de forma que ela receba uma outra função como parâmetro para que possa realizar as operações abaixo sobre a pessoa retornada.

Copiar

```javascript
const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const getUser = () => {
  const userToReturn = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
  };
};

console.log(getUser()); // complete a chamada da função getUser de modo que o retorno seja: "Hello! My name is Ivan Ivanovich"
console.log(getUser()); // complete a chamada da função getUser de modo que o retorno seja: "Ivan is Russian"
```

----------

**2 -** No código abaixo você tem a função  `getUser`  modificada, que agora funciona de modo assíncrono e imprime dados de uma pessoa qualquer depois de um certo tempo. Complete a função  `getUser`  de forma que ela receba um  `callback`  para que possa realizar as operações abaixo sobre a pessoa.

Copiar

```javascript
const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const getUser = () => {
  setTimeout(() => {
    const user = {
      firstName: "Ivan",
      lastName: "Ivanovich",
      nationality: "Russian",
    };
    console.log(user);
  }, delay());
};

getUser(userFullName); // deve imprimir "Hello! My name is Ivan Ivanovich" depois de um certo tempo
getUser(userNationality); // deve imprimir "Ivan is Russian" depois de um certo tempo
```

**Obs:** note e averigue o comportamento assíncrono da função  `getUser`  ao chamar  `getUser(userFullName)`  seguido de  `getUser(userNationality)`  . Tem hora que é impresso antes no console o nome da pessoa, e tem hora que é impressa antes a nacionalidade da pessoa!

#### Para fixar - Lidando com erros em operações assíncronas

Vamos botar tudo isso em prática com este exercício de fixação:

**1 -** A função  `getCountry`  abaixo tem aproximadamente 50% de chance de obter com sucesso um país, tendo um  `callback`  para poder ser feita qualquer operação sobre o país retornado. Adicione um outro  `callback`  para  `getCountry`  , de forma que trate a mensagem de erro retornada.

Copiar

```javascript
const countryName = ({ name }) => console.log(`Returned country is ${name}`);
const countryCurrency = ({ name, currency }) => console.log(`${name}'s currency is the ${currency}`);

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const printErrorMessage = (error) => console.log(`Error getting country: ${error}`);

const getCountry = (onSuccess) => {
  setTimeout(() => {
    const didOperationSucceed = Math.random() >= 0.5;
    if(didOperationSucceed) {
      const country = {
        name: "Brazil",
        hdi: 0.759,
        currency: "Real",
      };
      onSuccess(country);
    }
    else {
      const errorMessage = "Country could not be found";
    }
  }, delay());
};

// Deve imprimir "Returned country is Brazil" no sucesso, ou "Error getting country: Country could not be found" em falha
getCountry(countryName, printErrorMessage);

// Deve imprimir "Brazil's currency is the Real" no sucesso, ou "Error getting country: Country could not be found" em falha
getCountry(countryCurrency, printErrorMessage);
```

----------