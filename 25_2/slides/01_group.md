# 25.2 - Aggregation Framework - Parte 2

## Operador `$group`

### Desafio
agrupar os pedidos por status e data da compra

#### Exemplo 1

```js
db.orders.aggregate(
  {
    $group: {
      _id: ['$orderStatus', '$invoiceDate'],
      total: { $sum:1  }
    }
  },
  { $sort: { total: -1 } }
);
```

#### Exemplo 2

```js
db.orders.aggregate(
  {
    $group: {
       _id: { orderStatus: '$orderStatus', invoiceDate: '$invoiceDate' } ,
      total: { $sum:1  }
    }
  },
  { $sort: { total: -1, '_id.invoiceDate': 1 } }
);
```

