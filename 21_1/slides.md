---
presentation:
  width: 1920
  height: 1080
  theme: black.css
  previewLinks: true
---

<!-- slide -->
# 21.1 - Funções mais usadas no SQL

<!-- slide vertical=true -->

## O que vamos aprender?

* Como usar IF ou CASE
* Funções para manipular Strings
* Operações matemáticas
* Funções para manipular datas
* Funções de agregação
* Como usar GROUP BY/HAVING


<!-- slide -->

## Como usar IF ou CASE

<!-- slide vertical=true -->

### Síntaxe do  IF

```sql
SELECT IF(<condicao>, <valor_se_verdadeiro>, <valor_se_falso>);
```

<!-- slide vertical=true -->

### Exemplo do  CASE

```sql
SELECT 
  concat(first_name, " ", last_name), 
  CASE store_id 
  WHEN 1 THEN 'loja 1'
  WHEN 2 THEN 'loja 2'
  END AS loja
FROM sakila.customer;
```

<!-- slide vertical=true -->

### [🤔 Dúvidas 🤔](https://wall.sli.do/event/cxcnx0en?section=f7e1666b-f6f6-4b7c-9572-1b90f5b0a1af)

<!-- slide -->

### Funções de manipulação de String

* UCASE
* LCASE
* REPLACE
* LEFT
* RIGHT
* LENGTH
* SUBSTRING


<!-- slide vertical=true -->

### [🤔 Dúvidas 🤔](https://wall.sli.do/event/cxcnx0en?section=f7e1666b-f6f6-4b7c-9572-1b90f5b0a1af)

<!-- slide -->

### Operações e funções matemáticas

* Operadores aritméticos +, -, *, /
* `DIV` realiza uma divisão inteira.
* `MOD` retorna o resto de uma divisão inteira.
* `ROUND` te permite arredondar um valor, especificando ou não as casas decimais.
* `CEIL` te permite arredondar o valor sempre para o valor inteiro mais próximo para cima.
* `FLOOR` te permite arredondar o valor sempre para o valor inteiro mais próximo por baixo.
* `POW` te permite fazer potenciação onde temos numero X elevado ao numero Y.
* `SQRT` retorna a raiz quadrada de um número. Caso não exista uma raiz NULL é retornado.
* `RAND` gera valores aleatórios entre 0 (incluso) e 1.0 (excluso).

<!-- slide vertical=true -->

### [🤔 Dúvidas 🤔](https://wall.sli.do/event/cxcnx0en?section=f7e1666b-f6f6-4b7c-9572-1b90f5b0a1af)

<!-- slide -->

### Funções de manipulaç˜do de data

* `CURRENT_DATE` retorna a data atual.
* `NOW` retorna a data e hora atual.
* `DATEDIFF` retorna a diferença entre duas datas em número de dias.
* `TIMEDIFF` retorna a diferença entre dois timestamps no formato de horas, minutos e segundos.

<!-- slide vertical=true -->

### [🤔 Dúvidas 🤔](https://wall.sli.do/event/cxcnx0en?section=f7e1666b-f6f6-4b7c-9572-1b90f5b0a1af)

<!-- slide -->

### Funções de agregação

* `AVG` retorna a média do valor de uma coluna. 
* `MIN` retorna o menor valor encontrado em uma coluna
* `MAX` retorna o maior valor encontrado em uma coluna
* `SUM` retorna a soma de todos os valores de uma coluna.
* `COUNT` retorna a contagem dos valores NOT NULL de uma coluna.* 

<!-- slide vertical=true -->

### [🤔 Dúvidas 🤔](https://wall.sli.do/event/cxcnx0en?section=f7e1666b-f6f6-4b7c-9572-1b90f5b0a1af)

<!-- slide -->


### GROUP BY

Usamos para definir escopos para aplicar funções de agregação

```sql
SELECT <coluna(s)> FROM <tabela>
GROUP BY <coluna(s)>
```

<!-- slide vertical=true -->

### [🤔 Dúvidas 🤔](https://wall.sli.do/event/cxcnx0en?section=f7e1666b-f6f6-4b7c-9572-1b90f5b0a1af)

<!-- slide -->

### GROUP BY/HAVING

O Having filtra os dados gerados após o uso do GROUP BY. 

Exemplo:

```sql
SELECT district, COUNT(*)
FROM sakila.address
GROUP BY district
HAVING COUNT(*) >= 2;
```

<!-- slide vertical=true -->

### [🤔 Dúvidas 🤔](https://wall.sli.do/event/cxcnx0en?section=f7e1666b-f6f6-4b7c-9572-1b90f5b0a1af)
