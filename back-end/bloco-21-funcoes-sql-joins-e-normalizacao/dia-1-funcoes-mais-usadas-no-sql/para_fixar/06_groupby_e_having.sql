-- Praticando GROUP BY

-- Exercício 1
SELECT active, COUNT(*)
FROM sakila.customer
GROUP BY active;

-- Exercício 2
SELECT store_id, active, COUNT(*)
FROM sakila.customer
GROUP BY store_id, active;

-- Exercício 3
SELECT rating, AVG(rental_duration)
FROM sakila.film
GROUP BY rating
ORDER BY AVG(rental_duration) DESC;

-- Exercício 4
SELECT district, COUNT(*) AS quantidade_de_endereços
FROM sakila.address
GROUP BY district
ORDER BY quantidade_de_endereços DESC;

-- Praticando GROUP BY com HAVING

-- Exercício 1
SELECT rating, AVG(length) AS duração_media
FROM sakila.film
GROUP BY rating
HAVING duração_media BETWEEN 115.0 AND 121.50
ORDER BY duração_media DESC;

-- Exercício 2
SELECT rating, SUM(replacement_cost) AS custo_total_de_substituição
FROM sakila.film
GROUP by rating
HAVING custo_total_de_substituição > 3950.50
ORDER BY custo_total_de_substituição;