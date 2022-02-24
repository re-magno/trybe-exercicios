-- Para pular uma certa quantidade de linhas do seu resultado, você pode usar o comando OFFSET .

-- # Query + LIMIT quantidade_de_linhas OFFSET quantidade_de_linhas
SELECT * FROM sakila.rental LIMIT 10 OFFSET 3;

-- Tranquilo, não é? Agora, olhando o resultado a seguir, qual query eu teria que montar para trazer os 10 primeiros resultados, a partir de JOHNNY?
SELECT * FROM sakila.actor LIMIT 10 OFFSET 5;