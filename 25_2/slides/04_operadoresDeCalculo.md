# 25.2 - Aggregation Framework - Parte 2

## Operadores de cálculo 

* Operadores `$add`, `$subtract`, `$multiply`, `$divide` e `$abs`;

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

* Operadores  `$round`, `$ceil`, `$floor`;

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