## Exercícios

**Exercício 1** : Descubra como fazer uma pesquisa em qualquer tabela sem utilizar uma linha de código usando o  **MySql Workbench** .
**Resposta:** Clique com botão direito na tabela e selecione "select rows - limit N".

**Exercício 2** : Descubra como é possível criar uma tabela sem usar código  **SQL** usando o  **MySql Workbench** .
**Resposta:** Clique com o botão direito em _Tables_ e selecione _Create Table_.

**Exercício 3** : Feito isso, crie uma tabela com as seguintes restrições:

Nome da tabela:  `Filme`

Colunas:

-   **_FilmeId_** - primary key, tipo int, incrementa por 1 cada vez que um valor é inserido automaticamente;
-   **_Descricao_** - não permite nulos, tipo texto (varchar(100));
-   **_AnoLancamento_** - não permite nulos, tipo int;
-   **_Nota_** - permite nulos, tipo int;

CREATE TABLE `filme` (
  `FilmeId` int NOT NULL AUTO_INCREMENT,
  `Descricao` varchar(100) NOT NULL,
  `AnoLancamento` int NOT NULL,
  `Nota` int DEFAULT NULL,
  PRIMARY KEY (`FilmeId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

**Exercício 4** : Analise a tabela  `city`  e encontre a tabela à qual a coluna  `country_id`  faz referência.
**Resposta:** Ela faz referência à tabela country.

**Exercício 5** : Após resolver o exercício anterior, responda: qual tipo de relacionamento a tabela  `city`  faz com a tabela  `country`  ?
**Resposta:** N:1

**Exercício 6** : Qual tipo de relacionamento a tabela  `country`  faz com a tabela  `city`  ?
**Resposta:** 1:N

**Exercício 7** : Abra tabela por tabela do banco  `sakila`  e encontre no mínimo 3 exemplos de um relacionamentos 1:N ou N:1.
**Resposta:**

1.  store -> staff
2.  language -> film
3.  film -> language