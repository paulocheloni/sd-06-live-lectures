---
presentation:
  width: 1920
  height: 1080
  theme: black.css
  previewLinks: true
---

<!-- slide -->
# 22.3 - Transformando ideias em um banco de dados - Parte 2

<!-- slide vertical=true -->

## O que vamos aprender?

* Como clonar tabelas;
* Criar Views;
* Comandos Alter e Drop Table;
* Índices

<!-- slide -->

## Como clonar uma tabela

```SQL
USE sakila;
CREATE TABLE actor_clone
LIKE actor;
```

<!-- slide vertical=true -->

### Lets Code!

Clonar a tabela fazendeiro do banco fazendinha para tabela fazendeiro_backup.

<!-- slide vertical=true -->

![clone1](images/clone1.jpg)

<!-- slide vertical=true -->

### [🤔 Dúvidas 🤔](https://wall.sli.do/event/lb5tpqpc?section=a446c530-6259-4414-8228-2e9f4067b799)

<!-- slide -->

### VIEWS

Recurso do BD para criar uma tabela *virtual* : 

* pode ser usada em relatórios;
* pode ser usada como base para montar novas queries;
* reduz a necessidade de reescrever queries usadas com frequência; 

<!-- slide vertical=true -->

Para criar uma view

```sql
CREATE VIEW nome_da_view AS query
```

Para apagar uma view

```sql
DROP VIEW nome_da_view;
```

<!-- slide vertical=true -->

Exemplo:

```sql
USE sakila;
CREATE VIEW FilmesDentroDasCategoriasPreferidas AS
SELECT title FROM sakila.film f
INNER JOIN sakila.film_category fc
ON f.film_id = fc.film_id
WHERE fc.category_id IN (1,2,5,10,14);
-- Testando a view.
SELECT * FROM FilmesDentroDasCategoriasPreferidas ;
```

<!-- slide vertical=true -->

### Lets Code!

Monte uma view chamada FazendeirosQuePossuemFazendaDeMilho;

<!-- slide vertical=true -->

### [🤔 Dúvidas 🤔](https://wall.sli.do/event/lb5tpqpc?section=a446c530-6259-4414-8228-2e9f4067b799)

<!-- slide -->

### ALTER TABLE

Primeira vamos criar um novo banco

```sql
CREATE DATABASE IF NOT EXISTS TrybeDB;
USE TrybeDB;

CREATE table BeTrybe(
    id int,
    cidade VARCHAR(50)
);
```

<!-- slide vertical=true -->

```sql
SHOW COLUMNS FROM BeTrybe; -- ver as colunas da tabela

ALTER TABLE BeTrybe ADD column data_fundacao DATE;

ALTER TABLE BeTrybe ADD estado VARCHAR(50) AFTER cidade;

ALTER TABLE BeTrybe MODIFY estado char(2) NOT NULL;

ALTER TABLE BeTrybe MODIFY id INT PRIMARY KEY AUTO_INCREMENT;

ALTER TABLE BeTrybe CHANGE id betrybe_id INT;

ALTER TABLE BeTrybe DROP COLUMN estado;
```

<!-- slide vertical=true -->

### Lets Code!

* Adicionar uma coluna telefone na tabela fazendeiro.
* Alterar o tipo da colunas hectares da tabela fazenda para INT.
* Mudar o nome da coluna id para fazenda_id na tabela fazenda.
* Remover a coluna telefone na tabela fazendeiro.  


<!-- slide -->

### Pausa

![image](https://media4.giphy.com/media/xThuWpnG8UOeTmFVmg/giphy.gif?cid=ecf05e47woqxoe6uei2xokvwh7qfjq781kbsk6s5tgulnwn9&rid=giphy.gif)

<!-- slide -->

## DROP TABLE

```sql
DROP TABLE <nome_tabela>
```

```sql
DROP TABLE actor_clone; -- Remove com sucesso

DROP TABLE rental; -- Não remove por causa da integridade referencial

DROP TABLE payment;

DROP TABLE rental;
```


<!-- slide vertical=true -->

### [🤔 Dúvidas 🤔](https://wall.sli.do/event/lb5tpqpc?section=a446c530-6259-4414-8228-2e9f4067b799)

<!-- slide -->

## ÍNDICES

Principais tipos

* PRIMARY KEY
* UNIQUE INDEX
* FULLTEXT INDEX
* INDEX

<!-- slide vertical=true -->

```sql
CREATE INDEX index_country
ON sakila.country (country);

SELECT * FROM sakila.country WHERE country = 'Sudan';
```

<!-- slide vertical=true -->

### FULLTEXT INDEX

```sql
CREATE FULLTEXT INDEX description_index
ON sakila.film (description);
```

```sql
SELECT * FROM sakila.film
WHERE MATCH (description) AGAINST('of a Pastry Chef And a Woman who must Chase');

DROP INDEX description_index ON sakila.film;

SELECT * FROM sakila.film
WHERE description LIKE '%of a Pastry Chef And a Woman who must Chase%';
```


<!-- slide vertical=true -->

![clone1](images/index_pros_and_cons.jpg)

<!-- slide vertical=true -->

### [🤔 Dúvidas 🤔](https://wall.sli.do/event/lb5tpqpc?section=a446c530-6259-4414-8228-2e9f4067b799)

<!-- slide -->

### [🤔 Dúvidas 🤔](https://wall.sli.do/event/lb5tpqpc?section=a446c530-6259-4414-8228-2e9f4067b799)


