-- Usando tabela staff do banco de dados sakila . Como você poderia responder às seguintes questões?
USE sakila;
-- 1. Quantas senhas temos cadastradas nessa tabela?
SELECT COUNT(password) FROM staff;
-- Resposta: 1

-- 2. Quantas pessoas temos no total trabalhando para nossa empresa?
SELECT COUNT(*) FROM staff;
-- Resposta: 2

-- 3. Quantos emails temos cadastrados nessa tabela?
SELECT COUNT(email) FROM staff;
-- Resposta: 2
