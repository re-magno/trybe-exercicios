-- Desafios com DIV e MOD

-- Desafio 1
SELECT IF(15 MOD 2 = 0, 'Par', 'Ímpar') AS 'Par ou Ímpar';

-- Desafio 2
SELECT 220 DIV 12;

-- Desafio 3
SELECT IF(220 MOD 12 = 0, 'NÃO', CONCAT('SIM, ', 220 MOD 12));

-- Para Fixar:

-- Exercício 1
SELECT ROUND(15 + (RAND() * 5));

-- Exercício 2
SELECT ROUND(15.7515971, 5);

-- Exercício 3
SELECT FLOOR(39.494);

-- Exercício 4
SELECT CEIL(85.234);