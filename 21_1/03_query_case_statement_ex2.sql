SELECT 
CASE
  WHEN length <= 30 THEN 'Até Meia-Hora'
  WHEN length > 30 AND length <= 60 THEN 'De 30 minutos a 1 hora'
  WHEN length > 60 AND length <= 90 THEN 'De 1 hora a 1 hora e meia'
  WHEN length > 90 AND length <= 120 THEN 'De 1 hora e meia até duas horas'
  WHEN length > 120 THEN 'Mais de duas horas'
END AS Duracão_do_filme
FROM sakila.film;

-- OU

SELECT 
CASE
  when length BETWEEN 0 AND 30 THEN 'Até Meia-Hora'
  when length BETWEEN 31 AND 60 THEN 'De 30 minutos a 1 hora'
  when length BETWEEN 61 AND 90 THEN 'De 1 hora a 1 hora e meia'
  when length BETWEEN 91 AND 120 THEN 'De 1 hora e meia até duas horas'
  ELSE 'Mais de duas horas'
END AS Duracão_do_filme
FROM sakila.film;

