SELECT 
  CONCAT(first_name, " ", last_name), 
  CASE store_id 
  WHEN 1 THEN 'loja 1'
  WHEN 2 THEN 'loja 2'
  END AS loja
FROM sakila.customer;