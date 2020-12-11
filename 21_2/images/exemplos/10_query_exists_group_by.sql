-- Retornar o nome completo de todos os atores que fizeram pelo menos 30 filmes
SELECT actor_id,
  CONCAT(first_name, " ", last_name) AS full_name
FROM sakila.actor AS a
WHERE EXISTS (
    SELECT actor_id
    FROM sakila.film_actor AS fa
    WHERE a.actor_id = fa.actor_id
    GROUP BY fa.actor_id
    HAVING COUNT(fa.film_id) >= 30
  )
ORDER BY full_name;

-- MESMO RESULTADO COM JOIN
SELECT a.actor_id,
  CONCAT(first_name, " ", last_name) AS full_name
FROM sakila.actor AS a
INNER JOIN sakila.film_actor AS fa ON a.actor_id = fa.actor_id
GROUP BY a.actor_id
HAVING COUNT(fa.film_id) >= 30
ORDER BY full_name;