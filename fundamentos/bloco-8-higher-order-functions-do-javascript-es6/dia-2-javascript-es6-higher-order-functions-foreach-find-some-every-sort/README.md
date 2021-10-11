# JavaScript ES6 - Higher Order Functions - forEach, find, some, every, sort

### Você será capaz de:

-   Utilizar a função  `Array.forEach`  para iterar sobre todos os elementos de um array;
    
-   Utilizar a função  `Array.find`  para encontrar o primeiro elemento de um array que satisfaça a uma condição;
    
-   Utilizar as funções  `Array.some`  e  `Array.every`  para testar se os elementos de um array satisfazem a uma condição;
    
-   Utilizar a função  `Array.sort`  para ordenar arrays de acordo com algum critério.
    

----------
### Instruções para realização dos exercícios

Nos exercícios a seguir, você trabalhará com uma estrutura de dados representando uma lista de livros, contendo informações como nome do livro, gênero, pessoa autora do livro e data de lançamento.

Em cada exercício, será pedido que você encontre ou produza alguma informação a respeito dessa lista utilizando as funções que você aprendeu hoje. Todos os exercícios contêm um código base. Você deverá copiar esse código e salvá-lo em um arquivo nomeado conforme o número do exercício, completando a função em branco.

Por exemplo, o exercício 1 deve ser salvo no arquivo  `exercise1.js`  , e assim por diante.

### Agora a prática

Estes exercícios praticam os conceitos de  _Higher Order Functions_ associados a outros já vistos, como  _arrow functions_ ,  _template literals_ ,  _objetos_ e temas dos fundamentos. Essa mistura de conceitos é muito importante para seu aprendizado, então use tudo o que sabe para resolver os exercícios!

**Utilize seguinte código como template para realizar os exercícios:**

Copiar

```javascript
const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
```

----------

**1 -** Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.

-   Dica: use a função  `find`  .

Copiar

```javascript
function authorBornIn1947() {
  // escreva aqui o seu código
}
```

----------

**2 -** Retorne o nome do livro de menor nome.

-   Dica: use a função  `forEach`  .

Copiar

```javascript
function smallerName() {
  let nameBook;
  // escreva aqui o seu código

  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}
```

----------

**3 -** Encontre o primeiro livro cujo nome possui 26 caracteres.

Copiar

```javascript
const expectedResult = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin',
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991,
};

function getNamedBook() {
  // escreva seu código aqui
}
```

----------

**4 -** Ordene os livros por data de lançamento em ordem decrescente.

Copiar

```javascript
const expectedResult = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: { name: 'Stephen King', birthYear: 1947 },
    releaseYear: 1986,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1920 },
    releaseYear: 1965,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
];

function booksOrderedByReleaseYearDesc() {
  // escreva aqui seu código
}
```

----------

**5 -** Faça uma função que retorne  `true`  , se todas as pessoas autoras nasceram no século XX, ou  `false`  , caso contrário.

Copiar

```javascript
const expectedResult = false;

function everyoneWasBornOnSecXX() {
  // escreva seu código aqui
}
```

----------

**6 -** Faça uma função que retorne  `true`  , se algum livro foi lançado na década de 80, e  `false`  , caso contrário.

Copiar

```javascript
const expectedResult = true;

function someBookWasReleaseOnThe80s() {
  // escreva seu código aqui
}
```

----------

**7 -** Faça uma função que retorne  `true`  , caso nenhum author tenha nascido no mesmo ano, e  `false`  , caso contrário.

Copiar

```javascript
const expectedResult = false;

function authorUnique() {
  // escreva seu código aqui
}
```

----------