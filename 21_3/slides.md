---
presentation:
  width: 1920
  height: 1080
  theme: black.css
  previewLinks: true
---

<!-- slide -->
# 21.3 - Stoured Routines e Triggers

<!-- slide vertical=true -->

## O que vamos aprender?

* Stored Procedures
* Stored Functions
* Principais diferenças entre Procedures e Functions
* Triggers

<!-- slide -->

## Stored Procedures

```SQL
USE banco_de_dados; -- obrigatório para criar a procedure no banco correto
DELIMITER $$ -- definindo delimitador

CREATE PROCEDURE nome_da_procedure(@parametro1, @parametro2, ..., @parametroN) -- parâmetros
BEGIN -- delimitando o início do código SQL

END $$ -- delimitando o final do código SQL

DELIMITER ; -- muda o delimitador de volta para ; - o espaço entre DELIMITER e o ';' é necessário
```

<!-- slide vertical=true -->

### [🤔 Dúvidas 🤔](https://wall.sli.do/event/kfyu9xn5?section=6eda76a9-08af-4a66-a2a8-a92a3a2148a2)

<!-- slide -->

## Stored Routines

```sql
USE banco_de_dados; -- obrigatório para criar a função no banco correto
DELIMITER $$

CREATE FUNCTION nome_da_function(parametro1, parametro2, ..., parametroN)
RETURNS tipo_de_dado tipo_de_retorno
BEGIN
    query_sql
    RETURN resultado_a_ser_retornado;
END $$

DELIMITER ;
```

<!-- slide vertical=true -->

### [🤔 Dúvidas 🤔](https://wall.sli.do/event/kfyu9xn5?section=6eda76a9-08af-4a66-a2a8-a92a3a2148a2)

<!-- slide -->

## Stored Procedures x Stored Routines

![image](stored_procedure_vs_stored_function.png)

<!-- slide -->

### Triggers

```sql
DELIMITER $$

CREATE TRIGGER nome_do_trigger
[BEFORE | AFTER] [INSERT | UPDATE | DELETE] ON tabela
FOR EACH ROW
BEGIN
    -- o código SQL entra aqui
END;

DELIMITER $$ ;
```

<!-- slide vertical=true -->

### [🤔 Dúvidas 🤔](https://wall.sli.do/event/kfyu9xn5?section=6eda76a9-08af-4a66-a2a8-a92a3a2148a2)

<!-- slide -->

### [🤔 Dúvidas 🤔](https://wall.sli.do/event/kfyu9xn5?section=6eda76a9-08af-4a66-a2a8-a92a3a2148a2)



