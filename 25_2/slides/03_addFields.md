# 25.2 - Aggregation Framework - Parte 2

## Operador `$addFields` 

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




