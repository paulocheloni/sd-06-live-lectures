SELECT 
  CONCAT(first_name, " ", last_name), 
  IF(active, "Ativo", "Não ativo") 
FROM sakila.customer;