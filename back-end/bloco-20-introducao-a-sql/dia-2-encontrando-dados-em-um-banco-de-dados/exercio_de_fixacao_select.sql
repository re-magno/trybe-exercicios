-- Exercícios de fixação - SELECT , o primeiro passo.
 
-- 1. Monte uma query que exiba seu nome na tela;
SELECT 'renata';

-- 2. Monte uma query que exiba seu nome, sobrenome, cidade natal e idade na tela;
SELECT 'Renata', 'Magno', 'São Paulo', '34';

-- 3. Monte uma query que, além de exibir todas as informações já mencionadas, identifique cada coluna usando o AS , que é chamado de alias na linguagem SQL ( alias é como um apelido no português);
SELECT 'Renata' AS Nome, 'Magno' AS Sobrenome, 'São Paulo' AS 'Cidade Natal', '34' AS Idade;

-- 4. Qual é o resultado de 13 * 8 ? Descubra usando apenas o SELECT ;
SELECT 13*8;

-- 5. Monte uma query que exiba a data e hora atuais. Dê a essa coluna o nome "Data Atual".
SELECT now() as 'Data Atual';

-- Vamos agora entrar no banco de dados sakila e encontrar as seguintes informações, montando uma query para cada uma:

-- 1. Escreva uma query que selecione todas as colunas da tabela city ;
SELECT * FROM sakila.city;

-- 2. Escreva uma query que exiba apenas as colunas first_name e last_name da tabela customer ;
SELECT first_name, last_name FROM sakila.customer;

-- 3. Escreva uma query que exiba todas as colunas da tabela rental ;
SELECT * FROM sakila.rental;

-- 4. Escreva uma query que exiba o título, a descrição e a data de lançamento dos filmes registrados na tabela film ;
SELECT title, description, release_year FROM sakila.film;

-- 5. Utilize o SELECT para explorar todas as tabelas do banco de dados.
SELECT * FROM sakila.actor;
SELECT * FROM sakila.address;
SELECT * FROM sakila.category;
SELECT * FROM sakila.city;
SELECT * FROM sakila.country;
SELECT * FROM sakila.customer;
SELECT * FROM sakila.film;
SELECT * FROM sakila.film_actor;
SELECT * FROM sakila.film_category;
SELECT * FROM sakila.filme;
SELECT * FROM sakila.film_text;
SELECT * FROM sakila.inventory;
SELECT * FROM sakila.language;
SELECT * FROM sakila.payment;
SELECT * FROM sakila.rental;
SELECT * FROM sakila.staff;
SELECT * FROM sakila.store;