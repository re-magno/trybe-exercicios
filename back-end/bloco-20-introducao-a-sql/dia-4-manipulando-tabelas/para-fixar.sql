-- Para Fixar:

-- INSERT na prática

-- 1. Insira um novo funcionário na tabela sakila.staff .
-- Para saber quais campos são obrigatórios, clique com o botão direito na tabela sakila.staff e selecione "Table Inspector". Clique na aba "columns" e verifique quais campos aceitam nulos para te guiar. Lembre-se de que valores que são gerados automaticamente não precisam ser inseridos manualmente. Boa explorada!
INSERT INTO sakila.staff
(first_name, last_name, address_id, email, store_id, active, username, password)
VALUES
('Matthew', 'Clairmont', 2, 'mclairmont@gmail.com', 1, 1, 'matthewClairmont', 'matthew56489');

-- 2. Feito o exercício anterior, vamos agora para o nível 2. Insira dois funcionários novos em apenas uma query .
INSERT INTO sakila.staff
(first_name, last_name, address_id, email, store_id, active, username, password)
VALUES
  ('Diana', 'Bishop', 2, 'dbishop@gmail.com', 1, 1, 'dianabishop', 'diana9876'),
  ('Marcus', 'Whitmore', 2, 'mwhitmore@gmail.com', 1, 1, 'mwhitmore', 'whitmore857415');

  -- 3. Selecione os cinco primeiros nomes e sobrenomes da tabela sakila.customer e cadastre essas pessoas como atores na tabela sakila.actor .
INSERT INTO sakila.actor(first_name, last_name)
    SELECT first_name, last_name
    FROM sakila.customer
    ORDER BY customer_id
    LIMIT 5;

-- 4. Cadastre três categorias de uma vez só na tabela sakila.category .
INSERT INTO sakila.category
(name)
VALUES 
('romance'),
('biography'),
('fantasy');

-- 5. Cadastre uma nova loja na tabela sakila.store .
INSERT INTO sakila.store (manager_staff_id, address_id)
VALUES (3, 3);

-- Dê um UPDATE em seus conhecimentos com estes desafios

-- Como o banco pode ser deletado e recriado infinitamente, vamos desabilitar o --safe-updates nos exercícios. Além disso, esse modo pode ser habilitado novamente quando necessário. Rode o seguinte comando em uma janela de query dentro do MySQL Workbench sempre que abri-lo para desabilitar essa funcionalidade, antes de executar seus comandos UPDATE ou DELETE :

SET SQL_SAFE_UPDATES = 0;

-- 1. Atualize o primeiro nome de todas as pessoas da tabela sakila.actor que possuem o primeiro nome "JULIA" para "JULES".
UPDATE sakila.actor
SET first_name = 'JULES'
WHERE first_name = 'JULIA';

-- 2. Foi exigido que a categoria "Sci-Fi" seja alterada para "Science Fiction".
UPDATE category
SET name = 'Science Fiction'
WHERE name = 'Sci-Fi';

-- 3. Atualize o valor do aluguel para $25 de todos os filmes com duração maior que 100 minutos e que possuem a classificações "G" , "PG" ou "PG-13" e um custo de substituição maior que $20.
UPDATE sakila.film
SET rental_rate = 25
WHERE length > 100
AND rating IN('G', 'PG', 'PG-13')
AND replacement_cost > 20;

-- 4. Foi determinado pelo setor financeiro que haverá um reajuste em todos os preços dos filmes, com base em sua duração. Para todos os filmes com duração entre 0 e 100, o valor do aluguel passará a ser $10,00, e o aluguel dos filmes com duração acima de 100 passará a ser de $20,00.


-- Vamos praticar o DELETE

-- 1. Exclua do banco de dados o ator com o nome de "KARL".
SELECT actor_id
FROM sakila.actor
WHERE first_name = 'KARL';

DELETE FROM sakila.film_actor
WHERE actor_id = 12;

DELETE FROM sakila.actor
WHERE first_name = 'KARL';

-- 2. Exclua do banco de dados os atores com o nome de "MATTHEW".
SELECT actor_id
FROM sakila.actor
WHERE first_name = 'MATTHEW';

DELETE FROM sakila.film_actor
WHERE actor_id IN (8, 103, 181);

DELETE FROM sakila.actor
WHERE first_name = 'MATTHEW';

-- 3. Exclua da tabela film_text todos os registros que possuem a palavra "saga" em suas descrições.
DELETE FROM sakila.film_text
WHERE DESCRIPTION LIKE '%saga%';

-- 4. Apague da maneira mais performática possível todos os registros das tabelas film_actor e film_category .
TRUNCATE sakila.film_actor;
TRUNCATE sakila.film_category;

-- 5. Inspecione todas as tabelas do banco de dados sakila e analise quais restrições ON DELETE foram impostas em cada uma. Use o Table Inspector para fazer isso (aba DDL).


-- 6. Exclua o banco de dados e o recrie (use as instruções no início desta aula).
