# 25.2 - Aggregation Framework - Parte 2

## Operador `$addFields` 

Vamos adicionar alguns atributos novos na coleção pokemons.

```js
db.pokemons.find({}).map((doc) => {
  db.pokemons.updateOne(
    { _id: doc._id},
    {
      $set: {
        pontosAtaque: Math.round(Math.random() * 100),
        pontosDefesa: Math.round(Math.random() * 100),  
        bonusAtaque: Math.ceil(Math.random() * 10),
        bonusDefesa: Math.ceil(Math.random() * 10),
        qtdAtaquesBatalha: Math.ceil(Math.random() * 6),
        coeficienteAtaque: {
          poison: Math.ceil(Math.random() * 5),
          ground: Math.ceil(Math.random() * 5),
          ice: Math.ceil(Math.random() * 5),
          rock: Math.ceil(Math.random() * 5),
          ghost: Math.ceil(Math.random() * 5),
          fire: Math.ceil(Math.random() * 5),
          electric: Math.ceil(Math.random() * 5),
          fighting: Math.ceil(Math.random() * 5),
          normal: Math.ceil(Math.random() * 5),
          flying: Math.ceil(Math.random() * 5),
          dragon: Math.ceil(Math.random() * 5),
          psychic: Math.ceil(Math.random() * 5),
          bug: Math.ceil(Math.random() * 5),
          grass: Math.ceil(Math.random() * 5),
          water: Math.ceil(Math.random() * 5)
        },
        coeficienteDefesa: {
          poison: Math.ceil(Math.random() * 5),
          ground: Math.ceil(Math.random() * 5),
          ice: Math.ceil(Math.random() * 5),
          rock: Math.ceil(Math.random() * 5),
          ghost: Math.ceil(Math.random() * 5),
          fire: Math.ceil(Math.random() * 5),
          electric: Math.ceil(Math.random() * 5),
          fighting: Math.ceil(Math.random() * 5),
          normal: Math.ceil(Math.random() * 5),
          flying: Math.ceil(Math.random() * 5),
          dragon: Math.ceil(Math.random() * 5),
          psychic: Math.ceil(Math.random() * 5),
          bug: Math.ceil(Math.random() * 5),
          grass: Math.ceil(Math.random() * 5),
          water: Math.ceil(Math.random() * 5)
        },
      }
    }
  )
});
```

Podemos criar um campo chamado `ataqueTotal` com a soma dos valor `pontosAtaque` e `bonusAtaque`,

```js
db.pokemons.aggregate([
  {
    $addFields: {
      ataqueTotal: { $add: ['$pontosAtaque', '$bonusAtaque'] }
    }
  },
  { $project: { name: true, pontosAtaque: true, bonusAtaque: true, ataqueTotal: true} }
]);
```

### Desafio 1
Vamos descorbrir qual foi o item mais barato e o mais caro para o pedido com id 59.

```js
db.orders.aggregate([
  { $match: { "_id": 59 } },
  {
    $addFields: {
      loja: 'Familho',
      totalItems: { $sum: '$lineItems.prodCount' },
      itemMaisBarato: { $min: '$lineItems.Cost' },
      itemMaisCaro: { $max: '$lineItems.Cost' },
    }
  }
]).pretty();
```

### Desafio 2
Vamos descorbrir qual foi o total do pedido com id 59.

```js
db.orders.aggregate([
  { $match: { "_id": 59 } },
  { $unwind: '$lineItems' },
  { $addFields: { subtotal: { $multiply: [ '$lineItems.prodCount', '$lineItems.Cost'] } } },
  { 
    $group: {  
      _id: '$_id',
      totalPedido: { $sum: '$subtotal'}
    } 
  }
]).pretty();
```




