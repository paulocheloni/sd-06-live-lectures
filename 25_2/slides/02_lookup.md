# 25.2 - Aggregation Framework - Parte 2

## Operador `$lookup` (continuação)

### Desafio

 Vamos descobrir todos os pedidos feito pelo cliente `#60914` no dia `24/11/2016` feitas antes do meio dia.

### Usando lookup sem pipeline

#### Passo 1 
```js
db.customers.aggregate([
  { $match: { "_id": 60914 } },
  { 
    $lookup: {
      from: 'orders',
      localField: '_id',
      foreignField: 'CustId',
      as: 'pedidos'
    }
  }
]).pretty();
```

#### Passo 2
```js
// db.customers.aggregate([
//   { $match: { "_id": 60914 } },
//   { 
//     $lookup: {
//       from: 'orders',
//       localField: '_id',
//       foreignField: 'CustId',
//       as: 'pedidos'
//     }
//   },
  { $unwind: '$pedidos' },
  { $project: { _id: false, 'pedidoData': '$pedidos.invoiceDate', 'pedidoId': '$pedidos._id' } }
// ]).pretty();
```


#### Passo 3
```js
// db.customers.aggregate([
//   { $match: { "_id": 60914 } },
//   { 
//     $lookup: {
//       from: 'orders',
//       localField: '_id',
//       foreignField: 'CustId',
//       as: 'pedidos'
//     }
//   },
//   { $unwind: '$pedidos' },
//   { $project: { _id: false, 'pedidoData': '$pedidos.invoiceDate', 'pedidoId': '$pedidos._id' } },
     { 
       $match: {
          pedidoData: { $gt: ISODate("2016-11-24T00:00:00", $lt: ISODate("2016-11-24T12:00:00") }
       }
     }
// ]).pretty();
```

### Usando lookup com pipeline

#### Passo 1
```js
db.customers.aggregate([
  { $match: { "_id": 60914 } },
  { 
    $lookup: {
      from: 'orders',
      as: 'pedidos',
      // substituindo localField e foreignField por let/pipeline
      let: { customerId: '$_id' },
      pipeline: [
        {
          $match: {
            $expr: { $eq: [ '$CustId', '$$customerId'] }
          }
        }
      ] 
    }
  },
  { $unwind: '$pedidos' },
  { $project: { _id: false, 'pedidoData': '$pedidos.invoiceDate', 'pedidoId': '$pedidos._id' } }
]).pretty();
```

#### Passo 2
```js
// db.customers.aggregate([
//   { $match: { "_id": 60914 } },
//   { 
//     $lookup: {
//       from: 'orders',
//       as: 'pedidos',
//       let: { customerId: '$_id' },
//       pipeline: [
//         {
//           $match: {  
//             $expr: { $eq: [ '$CustId', '$$customerId'] },
               invoiceDate: { $gt: ISODate("2016-11-24T00:00:00"), $lt: ISODate("2016-11-24T12:00:00") }
//           }
//         }
//       ] 
//     }
//   },
//   { $unwind: '$pedidos' },
//   { $project: { _id: false, 'pedidoData': '$pedidos.invoiceDate', 'pedidoId': '$pedidos._id' } }
// ]).pretty();
```







