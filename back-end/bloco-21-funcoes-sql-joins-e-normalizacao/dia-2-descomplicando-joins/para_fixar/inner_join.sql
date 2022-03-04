-- Exercício 1
SELECT
  act.actor_id,
  CONCAT(act.first_name, ' ', act.last_name) name,
  f.film_id
FROM sakila.actor AS act
INNER JOIN sakila.film_actor AS f
ON act.actor_id = f.actor_id;

-- Exercício 2
SELECT
  s.first_name,
  s.last_name,
  a.address
FROM sakila.staff AS s
INNER JOIN sakila.address AS a
ON s.address_id = a.address_id;

-- Exercício 3
SELECT
  customer_id,
  CONCAT(c.first_name, ' ', c.last_name) name,
  c.email,
  a.address_id,
  a.address
FROM sakila.customer AS c
INNER JOIN sakila.address AS a
ON c.address_id = a.address_id
ORDER BY name DESC
LIMIT 100;

-- Exercício 4
SELECT
  c.first_name, c.email,
  c.address_id, a.address,
  a.district
FROM sakila.customer AS c
INNER JOIN sakila.address AS a
ON c.address_id = a.address_id
WHERE
  a.district = 'California'
    AND
  c.first_name LIKE '%rene%';

-- Exercício 5
-- nome e a quantidade de endereços dos clientes cadastrados
-- Ordene nomes de forma decrescente
-- somente os clientes ativos
-- tabela address e customer
SELECT
  c.first_name, 
  COUNT(a.address) AS endereços
FROM sakila.customer c
INNER JOIN sakila.address AS a
ON a.address_id = c.address_id
WHERE c.active = 1
GROUP BY c.customer_id
ORDER BY first_name DESC;

-- Exercício 6
SELECT
  s.first_name,
  s.last_name,
  AVG(p.amount) AS media_de_pagamento
FROM sakila.staff AS s
INNER JOIN sakila.payment AS p
ON s.staff_id = p.staff_id
WHERE YEAR(p.payment_date) = 2006
GROUP BY s.staff_id;

-- Exercício 7
-- id do ator , nome , id do filme e título do filme
-- actor , film_actor e film
SELECT
  A.actor_id,
  A.first_name,
  F.film_id,
  F.title
FROM sakila.actor AS A
INNER JOIN
  sakila.film_actor AS FA
  ON A.actor_id = FA.actor_id
INNER JOIN
  sakila.film AS F
  ON F.film_id = FA.film_id;
