-- SUBQUERY NO FROM
SELECT f.*
FROM (
    SELECT *
    FROM sakila.film
    WHERE title LIKE '%air%'
  ) AS f;