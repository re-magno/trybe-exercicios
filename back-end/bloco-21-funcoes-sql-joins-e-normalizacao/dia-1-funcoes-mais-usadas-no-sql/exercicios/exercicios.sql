-- Exercício 1
SELECT MAX(SALARY)
FROM hr.employees;

-- Exercício 2
SELECT MAX(SALARY) - MIN(SALARY)
FROM hr.employees;

-- Exercício 3 
SELECT JOB_ID, AVG(SALARY) AS media_salarial
FROM hr.employees
GROUP BY JOB_ID
ORDER BY media_salarial DESC;

-- Exercício 4
SELECT SUM(SALARY) AS valor_total
FROM hr.employees;

-- Exercício 5
SELECT
MAX(SALARY) AS maior_salario,
MIN(SALARY) AS menor_salario,
SUM(SALARY) AS salarios_totais,
ROUND(AVG(SALARY), 2) AS media_salarial
FROM hr.employees;

-- Exercício 6
SELECT JOB_ID, COUNT(*) AS total
FROM hr.employees
GROUP BY JOB_ID
HAVING JOB_ID = 'IT_PROG';

-- Exercício 7
SELECT JOB_ID, SUM(SALARY) AS total
FROM hr.employees
GROUP BY JOB_ID;

-- Exercício 8
SELECT JOB_ID, SUM(SALARY) AS total
FROM hr.employees
GROUP BY JOB_ID
HAVING JOB_ID = 'IT_PROG';

-- Exercício 9
SELECT JOB_ID, AVG(SALARY) AS media_salarial
FROM hr.employees
GROUP BY JOB_ID
HAVING JOB_ID <> 'IT_PROG'
ORDER BY media_salarial DESC;

-- Exercício 10
SELECT department_id, AVG(SALARY) media_salarial, COUNT(*) funcionários
FROM hr.employees
GROUP BY department_id
HAVING funcionários > 10;

-- Exercício 11
UPDATE hr.employees
SET phone_number = REPLACE(phone_number, '515', '777')
WHERE phone_number LIKE '515%';

-- Exercício 12
SELECT * FROM hr.employees
WHERE LENGTH(FIRST_NAME) >= 8;

-- Exercício 13
SELECT EMPLOYEE_ID, FIRST_NAME, YEAR(HIRE_DATE) FROM hr.employees;

-- Exercício 14
SELECT EMPLOYEE_ID, FIRST_NAME, DAY(HIRE_DATE) FROM hr.employees;

-- Exercício 15
SELECT EMPLOYEE_ID, FIRST_NAME, MONTH(HIRE_DATE) FROM hr.employees;

-- Exercício 16
SELECT UCASE(CONCAT(FIRST_NAME, ' ', LAST_NAME)) FROM hr.employees;

-- Exercício 17
SELECT LAST_NAME, HIRE_DATE
FROM hr.employees
WHERE MONTH(HIRE_DATE)=7 and YEAR(HIRE_DATE)=1987;

-- Exercício 18
SELECT FIRST_NAME, LAST_NAME,
DATEDIFF(CURRENT_DATE() , HIRE_DATE)
FROM hr.employees;
