-- considerando o banco pet_db recém-importado
-- retorna a quantidade de atores que fizeram algum filme (200)
SELECT * FROM pet_db.friends;
SELECT * FROM pet_db.pets;

-- Quais registros da tabela friends não existem na tabela pets?
SELECT * FROM pet_db.friend f WHERE NOT EXISTS (
    SELECT owner_id FROM pet_db.pets p
    WHERE p.owner_id = f.friend_id
);

-- Desafio: Quais registros da tabela sakila.city não existem na tabela sakila.address?


