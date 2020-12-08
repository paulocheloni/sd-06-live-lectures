---
presentation:
  width: 1920
  height: 1080
  theme: black.css
  previewLinks: true
---

<!-- slide -->
# 20.4 - Manipulando dados

<!-- slide vertical=true -->

## O que vamos aprender?

* INSERT
* UPDATE
* DELETE
* TRUNCATE

<!-- slide -->

### INSERT

Para inserir dados em uma tabela usamos a notação:

```sql
INSERT INTO <tabela> (col1, col2, col3, ....)
VALUES (valor_col1, valor_col2, valor_col3, ...)
```

<!-- slide vertical=true -->

Exemplo.:

```sql
INSERT INTO sakila.actor (actor_id, first_name, last_name, last_update)
VALUES (201, 'Robert', 'Downey Jr', '2020-12-08 15:00:00');
```

<!-- slide vertical=true -->

Nos casos em que você atribuir um valor para cada coluna do banco, pode-se omitir os nomes das colunas

```sql
INSERT INTO sakila.actor 
VALUES (202, 'Chris', 'Evans', '2020-12-08 15:00:00');
```

<!-- slide vertical=true -->
As colunas que tem valor padrão não precisam ter seus valores atribuídos. Por exemplo, as colunas `actor_id` e `last_update` já possuem valor padrão.

```sql
INSERT INTO sakila.actor (first_name, last_name)
VALUES ('Chris', 'Hemsworth');
```

<!-- slide vertical=true -->
### Inserindo várias linhas de uma vez só

```sql
INSERT INTO sakila.actor (first_name, last_name)
VALUES ('Scarlett ', 'Johansson'),
       ('Mark', 'Rufallo'),
       ('Jeremy', 'Renner');
```

<!-- slide vertical=true -->

### Ingorando dados duplicados
```sql
INSERT IGNORE INTO sakila.actor (first_name, last_name)
VALUES (200, 'Samuel', 'L. Jackson'),
       (201, 'Tom', 'Hiddleston'),
       (211, 'Josh', 'Brolin');
```

<!-- slide vertical=true -->
### Inserindo através do SELECT

Quando queremos inserir dados lendo de outra tabela podemos usar um SELECT como argumento de entrada para um insert

```sql
INSERT INTO sakila.actor (first_name, last_name)
SELECT first_name, last_name FROM sakila.customer LIMIT 5;
```

<!-- slide vertical=true -->

### [🤔 Dúvidas 🤔](https://wall.sli.do/event/rin7dwdg?section=a1ca10ef-f1f8-41c8-847a-729d9bfc513e)

<!-- slide -->



## UPDATE

Antes de tudo precisamos desabilitar o modo de updates seguros.

```sql
SET SQL_SAFE_UPDATES=0;

SHOW VARIABLES LIKE 'sql_safe_updates'; -- conferindo se o valor foi alterado
```

<!-- slide vertical=true -->

Update básico

```sql
UPDATE sakila.actor SET last_name = 'Pratt' WHERE first_name = 'Chris';

SELECT * FROM sakila.actor WHERE first_name = 'Chris';
```

<!-- slide vertical=true -->

Update em duas colunas ao mesmo tempo
```sql
UPDATE sakila.actor SET first_name='Chris', last_name = 'Hemsworth' WHERE actor_id=203;
```

<!-- slide vertical=true -->

## Update em massa

Exemplo 1:

```sql
UPDATE sakila.actor SET last_update=NOW() WHERE actor_id > 200;
```
<!-- slide vertical=true -->

## Update em massa

Exemplo 2:

```sql
UPDATE sakila.actor
SET first_name = (
	CASE actor_id 
    WHEN 1 THEN 'Joe'
    WHEN 2 THEN 'DAVIS'
    WHEN 3 THEN 'CAROLINE'
    END
);
```

<!-- slide vertical=true -->

## Update em massa

Exemplo 3:

```sql
UPDATE sakila.actor
SET last_update = (
	CASE 
    WHEN actor_id BETWEEN 1 AND 50 THEN '2020-12-08 00:00:00'
    WHEN actor_id BETWEEN 51 AND 100 THEN '2020-12-09 00:00:00'
    WHEN actor_id > 101 THEN '2020-12-10 00:00:00'
    END
);
```

<!-- slide vertical=true -->

## Update de forma sequencial

```sql
UPDATE sakila.staff
SET password= 'MudarSenha'
WHERE active=1
ORDER BY last_update
LIMIT 5;
```

<!-- slide vertical=true -->

### [🤔 Dúvidas 🤔](https://wall.sli.do/event/rin7dwdg?section=a1ca10ef-f1f8-41c8-847a-729d9bfc513e)


<!-- slide -->

## DELETE

Obs.: Lembrar de desativar o SQL_SAFE_UPDATES

```sql
DELETE FROM <tabela> (WHERE <condição>);
```

<!-- slide vertical=true -->

Exemplo:

```sql
DELETE FROM sakila.actor WHERE first_name = 'Chris' and last_name='Pratt'; 
```

<!-- slide vertical=true -->

DELETE (CHAVE ESTRANGEIRA)

```sql
-- Rejeita o comando DELETE
ON DELETE NO ACTION/RESTRICT;

--- Permite a exclusão das linhas na tabela referenciada pela chave estrangeira 
-- e seta para NULL os registros da tabela com a FK
ON DELETE SET NULL;

-- Exclui o registro da tabela referenciada e da tabela com a FK
ON DELETE CASCADE;
```

<!-- slide vertical=true -->

### [🤔 Dúvidas 🤔](https://wall.sli.do/event/rin7dwdg?section=a1ca10ef-f1f8-41c8-847a-729d9bfc513e)


<!-- slide -->

## TRUNCATE

Reseta a tabela

```
TRUNCATE <tabela>
```

<!-- slide vertical=true -->

### [🤔 Dúvidas 🤔](https://wall.sli.do/event/rin7dwdg?section=a1ca10ef-f1f8-41c8-847a-729d9bfc513e)



