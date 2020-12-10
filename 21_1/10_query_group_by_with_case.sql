SELECT 
CASE
  WHEN length <= 30 THEN 'Até Meia-Hora'
  WHEN length > 30 AND length <= 60 THEN 'De 30 minutos a 1 hora'
  WHEN length > 60 AND length <= 90 THEN 'De 1 hora a 1 hora e meia'
  WHEN length > 90 AND length <= 120 THEN 'De 1 hora e meia até duas horas'
  ELSE 'Mais de duas horas'
END AS duração,
count(film_id) as qtd_filmes
FROM sakila.film
GROUP BY duração;