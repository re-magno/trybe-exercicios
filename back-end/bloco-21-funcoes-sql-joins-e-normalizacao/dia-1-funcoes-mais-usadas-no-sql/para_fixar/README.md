## Para Fixar 

Esta seção tem como objetivo fixar os aprendizados e os exercícios estão separados por temas. 


### 01. Manipulação de strings

1.  Faça uma  _query_ que exiba a palavra  `'trybe'`  em CAIXA ALTA.
    
2.  Faça uma  _query_ que transforme a frase  `'Você já ouviu falar do DuckDuckGo?'`  em  `'Você já ouviu falar do Google?'`  .
    
3.  Utilizando uma  _query_ , encontre quantos caracteres temos em  `'Uma frase qualquer'`  .
    
4.  Extraia e retorne a palavra "JavaScript" da frase  `'A linguagem JavaScript está entre as mais usadas'`  .
    
5.  Por fim, padronize a string  `'RUA NORTE 1500, SÃO PAULO, BRASIL'`  para que suas informações estejam todas em caixa baixa.

### 02. Condicionais

1.  Usando o  `IF`  na tabela  `sakila.film`  , exiba o  **id do filme** , o  **título** e uma coluna extra chamada  **'conheço o filme?'** , em que deve-se avaliar se o nome do filme é '  **ACE GOLDFINGER** '. Caso seja, exiba "Já assisti a esse filme". Caso contrário, exiba "Não conheço o filme". Não esqueça de usar um alias para renomear a coluna da condicional.
    
2.  Usando o  `CASE`  na tabela  `sakila.film`  , exiba o  **título** , a  **classificação indicativa** (  `rating`  ) e uma coluna extra que vamos chamar de  **'público-alvo'** , em que classificaremos o filme de acordo com as seguintes siglas:
    
    -   **G:** "Livre para todos";
    -   **PG:** "Não recomendado para menores de 10 anos";
    -   **PG-13:** "Não recomendado para menores de 13 anos";
    -   **R:** "Não recomendado para menores de 17 anos";
    -   **Se não cair em nenhuma das classificações anteriores:** "Proibido para menores de idade".
    
    
### 03. Funções matemáticas do MySQL

##### Desafios com DIV e MOD

1.  Monte uma  _query_ usando o  `MOD`  juntamente com o  `IF`  para descobrir se o valor 15 é par ou ímpar. Chame essa coluna de  **'Par ou Ímpar'** , onde ela pode dizer 'Par' ou 'Ímpar'.
    
2.  Temos uma sala de cinema que comporta 220 pessoas. Quantos grupos completos de 12 pessoas podemos levar ao cinema sem que ninguém fique de fora?
    
3.  Utilizando o resultado anterior, responda à seguinte pergunta: temos lugares sobrando? Se sim, quantos?

##### Para Fixar

1.  Monte uma  _query_ que gere um valor entre  **15** e  **20** .
    
2.  Monte uma  _query_ que exiba o valor arredondado de  **15.7515971** com uma precisão de 5 casas decimais.
    
3.  Estamos com uma média de 39.494 de vendas de camisas por mês. Qual é o  **valor aproximado** para baixo dessa média?
    
4.  Temos uma taxa de inscrição de 85.234% no curso de fotografia para iniciantes. Qual é o  **valor aproximado** para cima dessa média?

### 04. Trabalhando com datas

1.  Monte uma  _query_ que exiba a diferença de dias entre  `'2030-01-20'`  e hoje.
    
2.  Monte uma  _query_ exiba a diferença de horas entre  `'10:25:45'`  e  `'11:00:00'`  .

### 05. Utilizando as funções de agregação  `AVG`  ,  `MIN`  ,  `MAX`  ,  `SUM`  e  `COUNT`

1.  Monte um  _query_ que exiba:
    -   A  **média de duração** dos filmes e dê o nome da coluna de 'Média de Duração';
    -   A  **duração mínima** dos filmes como 'Duração Mínima';
    -   A  **duração máxima** dos filmes como 'Duração Máxima';
    -   A  **soma de todas** as durações como 'Tempo de Exibição Total';
    -   E finalmente, a  **quantidade total** de filmes cadastrados na tabela  `sakila.film`  como 'Filmes Registrados'.

### 06. Exibindo e filtrando dados de forma agrupada com  `GROUP BY`  e  `HAVING`

#### Praticando GROUP BY

1.  Monte uma query que exiba a quantidade de clientes cadastrados na tabela  `sakila.customer`  que estão ativos e a quantidade que estão inativos.
    
2.  Monte uma query para a tabela  `sakila.customer`  que exiba a quantidade de clientes ativos e inativos por loja. Os resultados devem conter o  **ID da loja** , o  **status dos clientes** (ativos ou inativos) e a  **quantidade de clientes por status** .
    
3.  Monte uma query que exiba a  **média de duração de locação** por  **classificação indicativa** (  `rating`  ) dos filmes cadastrados na tabela  `sakila.film`  . Os resultados devem ser agrupados pela classificação indicativa e ordenados da maior média para a menor.
    
4.  Monte uma query para a tabela  `sakila.address`  que exiba o  **nome do distrito** e a  **quantidade** de endereços registrados nele. Os resultados devem ser ordenados da maior quantidade para a menor.

#### Praticando GROUP BY com HAVING

1.  Usando a query a seguir, exiba apenas as durações médias que estão entre 115.0 a 121.50. Além disso, dê um  `alias`  (apelido) à coluna gerada por  `AVG(length)`  , de forma que deixe a query mais legível. Finalize ordenando os resultados de forma decrescente.


```sql
    SELECT rating, AVG(length)
    FROM sakila.film
    GROUP BY rating;
```

2.  Usando a query a seguir, exiba apenas os valores de  **total do custo de substituição** que estão acima de $3950.50. Dê um  `alias`  que faça sentido para  `SUM(replacement_cost)`  , de forma que deixe a query mais legível. Finalize ordenando os resultados de forma crescente.


```sql
    SELECT rating, SUM(replacement_cost)
    FROM sakila.film
    GROUP by rating;
```

----------