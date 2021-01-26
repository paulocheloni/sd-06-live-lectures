# Aula 25.2 - Aggregation Framework - Parte 2

* Revisão de Lookup
* Operador `$addFields`;
* Operadores de cálculo `$add`, `$subtract`, `$multiply`, `$divide` e `$abs`;
* Operador `$round`, `$ceil`, `$floor`;

## Reimportando coleção

```bash
cd 25_2
mongorestore --drop --db pokemongo --collection pokemons dumps/samples_pokemon.bson
mongorestore --drop --db pokemongo --collection customers dumps/DBEnvyLoad_customers.bson
mongorestore --drop --db pokemongo --collection orders dumps/DBEnvyLoad_orders.bson
mongorestore --drop --db pokemongo --collection products dumps/DBEnvyLoad_products.bson
```

## [Operador `$group` com vários atributos](./01_groupd.md)

## [Operador `$lookup` com pipeline](./02_lookup.md)

## [Operador `$addFields`](./03_addFields.md)

## Operadores de cálculo 

* `$add`, `$subtract`, `$multiply`, `$divide` e `$abs`;

```js
db.pokemons.aggregate([
  {
    $addFields: {
      ataqueTotal: { $add: ['$pontosAtaque', '$bonusAtaque'] },
      defesaTotal: { $add: ['$pontosDefesa', '$bonusDefesa'] }
    }
  },
  { $project: { name: true, ataqueTotal: true, defesaTotal: true, diferenca: { $subtract: ['$ataqueTotal', '$defesaTotal'] } } }
]);

db.pokemons.aggregate([
  {
    $addFields: {
      ataqueTotal: { $add: ['$pontosAtaque', '$bonusAtaque'] }
      defesaTotal: { $add: ['$pontosDefesa', '$bonusDefesa'] },
    }
  },
  { 
    $project: { 
      name: true, 
      diferenca: { $abs: { $subtract: ['$ataqueTotal', '$defesaTotal'] } } 
    } 
  }
]);

db.pokemons.aggregate([
  {
    $addFields: {
      ataqueTotalFogo: {
        $multiply: [
          { $add: ['$pontosAtaque', '$bonusAtaque'] },
          '$coeficienteAtaque.fire'
        ] 
      },
      defesaTotalAgua: {
        $multiply: [
          { $add: ['$pontosDefesa', '$bonusDefesa'] },
          '$coeficienteDefesa.water'
        ]
      }
    }
  },
  { $project: { name: true, ataqueTotalFogo: true, defesaTotalAgua: true } }
]);


db.pokemons.aggregate([
  {
    $addFields: {
      ataqueMedio: {
        $divide: ['$pontosAtaque', '$qtdAtaquesBatalha']
      }
    }
  },
  { $project: { name: true, pontosAtaque: true, qtdAtaquesBatalha: true, ataqueMedio: true } }
]);
```

* Operador `$round`, `$ceil`, `$floor`;

```js
db.pokemons.aggregate([
  {
    $addFields: {
      ataqueMedio: {
        $round: [{$divide: ['$pontosAtaque', '$qtdAtaquesBatalha']}, 1]
        // $floor: {$divide: ['$pontosAtaque', '$qtdAtaquesBatalha']}
        // $ceil: {$divide: ['$pontosAtaque', '$qtdAtaquesBatalha']}
      }
    }
  },
  { $project: { name: true, pontosAtaque: true, qtdAtaquesBatalha: true, ataqueMedio: true } }
]);
```