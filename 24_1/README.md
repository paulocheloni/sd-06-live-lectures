---
presentation:
  width: 1920
  height: 1080
  theme: white.css
  previewLinks: true
---
<!-- slide -->


# Update Simples

<!-- slide vertical=true -->

O que vamos aprender:

* Atualizar dados com `updateOne` e `updateMany`;
* Utilizar os operadores `$set`, `$mul`, `$inc`, `$min`, `$max` e `$currentDate`;
* Renomear campos com `$rename`;
* Remover campos com `$unset`;

<!-- slide -->

## Antes de começar

```js
use school;

db.students.insertMany(
  [
    { name: "Estudante 1", school: "Escola do Futuro", bestScore: 9.8 },
    { name: "Estudante 2", school: "Escola do Futuro", bestScore: 7.2 }
  ]
);

db.students.find();
```

<!-- slide -->

## Alterando um único documento com `updateOne`

```js
db.students.updateOne(
  { school: "Escola do Futuro" },
  {
    $set: {
      school: "Trybe"
    }
  }
);
```

<!-- slide -->

## Alterando vários documento com `updateMany`

```js
db.students.updateMany(
  { school: "Escola do Futuro" },
  {
    $set: {
      school: "Trybe"
    }
  }
);
```

<!-- slide vertical=true -->

### Atomicidade

Faz todas as alterações ou não faz nenhuma.

### O campo _id

Quando o MongoDB atribui um valor ao _id, o tipo utilizado é o ObjectId, que basicamente é um hexadecimal composto por 12 bytes:

4 bytes com um valor timestamp, representando a data de criação, medida em segundos desde a Unix epoch;

5 bytes de um valor aleatório; e

3 bytes com um contador incremental, iniciado com outro valor aleatório.

[Documentação do Mongo sobre _id](https://docs.mongodb.com/manual/reference/method/ObjectId/index.html)

<!-- slide -->

### Opção `upsert`

(update + insert): tenta alterar, se não existir insere um novo documento.

```js
db.students.updateOne(
  { name: "Estudante 4" },
  {
    $set: {
      school: "Trybe",
      bestScore: 8.8
    }
  },
  { upsert: true }
);

```

<!-- slide -->

## Operador `$set`

<!-- slide -->

## Operador `$mul`

<!-- slide -->

## Operador `$inc`

<!-- slide -->

## Operadores `$min` e `$max`

O MongoDB comparará o valor do campo no documento com o valor especificado na operação: 
* `$max`: Se o valor passado na comparação for **maior** do que o valor atual do campo, a alteração será feita.
* `$min`: Se o valor passado na comparação for **menor** do que o valor atual do campo, a alteração será feita.

<!-- slide -->

## Operadores `$currentDate`

<!-- slide -->

## Renomear campos com `$rename`

<!-- slide -->

## Remover campos com `$unset`

<!-- slide -->

## Exercícios
[Link](https://course.betrybe.com/back-end/mongodb/simple-updates#exerc%C3%ADcios)