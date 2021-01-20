---
presentation:
  width: 1920
  height: 1080
  theme: white.css
  previewLinks: true
---
<!-- slide -->

# Updates Complexos - Parte 1

O que vamos aprender hoje? 

<!-- slide vertical=true -->

* Operadores `$push`, `$pull`, `$pop` e `$addToSet`;
* Modificadores `$each`, `$slice`, `$sort` e `$position`.
* Array Filters

<!-- slide -->

## Operador `$push`

Adicionar um ou mais elementos em um atributo do tipo array.(Obs.: Pode inserir elementos duplicados)

<!-- slide vertical=true -->

### Modificiadores do `$push`

* $each
* $sort
* $slice
* $position

<!-- slide vertical=true -->

### Prioridade dos modificadores

* Altera o array para adicionar os elementos ( $each ) na posição correta ( $position );
* Aplica a ordenação ( $sort ), se especificada;
* Limita o array ( $slice ), se especificado;
* Armazena o array .

<!-- slide -->

## Operador `$pull`

Remove os elementos que atendem a condição passada.

<!-- slide -->

## Operador `$pop`

Remove o último elemento da array.

<!-- slide -->

## Operador `$addToSet`

Garante que os dados não vão ser duplicados.

<!-- slide -->

## Array Filters

