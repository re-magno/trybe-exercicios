## Bloco 22 - Introdução ao desenvolvimento Web com Node.js - Dia 22.3 Mocha, Chai e Sinon - Testes de Back-end com Node.js

Neste dia aprendemos mais sobre testes e como testar scripts NodesJS. Revimos os conceitos de testes e os benefícios de escrever testes automatizados.

Para isso, conhecemos três ferramentas bastante populares para testes com Node.js:  **Mocha** ,  **Chai** e  **Sinon** . Nos aprofundamos em cada uma dessas, aprendendo sobre suas funções e como utilizá-las.

Além disso, revisamos conceitos importantes como  **asserts** ,  **testes unitários** e  **TDD** .

----------

#### Principais objetivos principais:

-   Entender o que são e para quê servem testes automatizados.
    
-   Escrever códigos para Node.js aplicando o conceito de TDD.
    
-   Escrever testes utilizando ferramentas populares;
    
-   Estruturar cenários de testes de acordo com os requisitos;
    
-   Criar  _mocks_ de funções para testes.
---------------

### Agora a prática

**Exercício 1** : Estruture os testes utilizando  `mocha`  e  `chai`  para um função que irá dizer se um número é "positivo", "negativo" ou "neutro":

-   Essa função irá receber um número como parâmetro e retornar uma string como resposta;
-   Quando o número passado for  **maior que 0** deverá retornar "positivo", quando for  **menor que 0** deverá retornar "negativo" e quando  **igual a 0** deverá retornar "neutro";

1.  Descreva todos os cenário de teste utilizando  `describes`  ;
2.  Descreva todos os testes que serão feitos utilizando  `its`  ;
3.  Crie as asserções validando se os retornos de cada cenário tem o tipo e o valor esperado.

**Exercício 2** : Implemente a função apresentada no exercício 1, garantindo que ela irá passar em todos os testes que você escreveu.

**DICA** : Lembre-se de adicionar o script de test no  `package.json`  e de instalar as dependências.

**Exercício 3** Adicione à função um tratamento para casos em que o parâmetro informado não seja do tipo  `Number`  .

1.  Adicione o cenário em seu arquivo de testes, passando um valor de tipo diferente a  `Number`  para a função;
2.  Adicione uma asserção para esperar que o valor retornado para esse caso seja igual uma string "o valor deve ser um número";
3.  Implemente em sua função tal validação para que o teste passe.

**Exercício 4** Crie testes para uma função que escreverá um conteúdo em um arquivo específico.

-   Essa função deverá receber dois parâmetros: o nome do arquivo e o conteúdo desse arquivo.
-   Após concluir a escrita do arquivo ela deverá retornar um  `ok`  .

1.  Descreva todos os cenários de teste utilizando  `describes`  ;
2.  Descreva todos os testes que serão feitos utilizando  `its`  ;
3.  Crie as asserções validando se o retorno da função possui o valor e tipo esperado.

**Exercício 5** Implemente a função descrita no exercício 4.

1.  Crie a função descrita no exercício 4 utilizando o módulo  `fs`  do node.
2.  Adapte os testes adicionando  `stub`  ao módulo utilizado do  `fs`  , isolando assim o teste.
3.  Garanta que todos os testes escritos no exercício 4 irão passar com sucesso.

----------