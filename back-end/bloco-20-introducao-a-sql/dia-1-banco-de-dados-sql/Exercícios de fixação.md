### _Constraints_ (restrições), chaves primárias e chaves estrangeiras
#### Exercícios de fixação

Então, depois de ter visto o conteúdo, vamos tentar chegar a algumas conclusões utilizando como exemplo a tabela a seguir:

![](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/sql/images/table1-a6228d5cf09aea61d1e205b18663d256.png)

Conteúdo da tabela address

Sem ter acesso à estrutura interna de como essa tabela foi criada, tente responder ao seguinte:

1.  Quais  _constraints_ a coluna  `address_id`  poderia ter? Por quê?
**Resposta** : A coluna address_id possui a constraint _Primary Key_ para que exista um número identificador único e não nulo.
---
2.  A coluna  `city_id`  é um número. Consegue identificar que tipo de  _constraint_ foi aplicado a ela?
**Resposta:** Na coluna `city_id`  foi aplicada a constraint _Foreign Key_.
---
3.  A coluna  `address`  (endereço) possui uma  _constraint_ . Qual tipo de  _constraint_ seria interessante ser aplicado a ela para que sempre exista um valor na coluna quando uma nova linha for criada?
**Resposta:** Seria interessante aplicar a _constraint_ _NOT NULL_ para que esta informação sempre seja preenchida. 

---

Temos aqui uma outra tabela:

![](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/sql/images/table2-bc817500d0add9d388501e776cdd26d6.png)

Conteúdo da tabela `city`

1.  Que tipo de  _constraint_ a coluna  `city_id`  possui?
**Resposta:** A coluna city _id possui o tipo _Primary Key_ .
---

2.  Qual é o motivo de a coluna  `country_id`  não possuir nomes de  _country_ (país)? Ela é algum tipo de chave primária ou estrangeira?
**Resposta:** A coluna `country_id` representa uma _Foreign Key_  ou seja uma chave estrangeira. Para verificar o nome do país é necessário ir até a tabela na qual ela é declarada como _Primary Key_. 
---
Na tabela a seguir:

![](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/sql/images/table3-dfbcb99a6654c108ca5f6258e7a3dcd1.png)

Conteúdo da tabela `film`

1.  Qual coluna possui uma  **_primary key_** ?
**Resposta:** A coluna `film_id`.
---
2.  Qual coluna possui uma  **_foreign key_** ?
**Resposta:** A coluna `category_id`.


### MySQL na linha de comando

#### Vamos treinar!

Usando os comandos aprendidos neste dia, resolva os seguintes desafios:

1.  Entre no banco de dados  `mysql`  .
```shell
mysql -u root -p
```
2.  Visualize todas as tabelas desse banco.

```sql
SHOW DATABASES;
USE sys;
SHOW TABLES;
```
3.  Visualize a estrutura de pelo menos 10 tabelas diferentes e tente entender o tipo de estrutura que costuma ser utilizada.


```sql
DESCRIBE host_summary;
```
4.  Crie um novo banco de dados com o seu nome e depois entre nele!

```sql
CREATE DATABASE renata_magno;
USE renata_magno;
```
