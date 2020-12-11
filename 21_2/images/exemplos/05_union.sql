SELECT first_name FROM customer;

SELECT first_name FROM staff;

SELECT first_name FROM customer
UNION ALL
SELECT first_name FROM staff
ORDER BY first_name;