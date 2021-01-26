# Aula 25.2 - Aggregation Framework - Parte 2

* Group com vários atributos
* Lookup com pipeline
* Operador `$addFields`;
* Operadores de cálculo `$add`, `$subtract`, `$multiply`, `$divide` e `$abs`;
* Operadores `$round`, `$ceil`, `$floor`;

## Reimportando coleção

```bash
cd 25_2
mongorestore --drop --db pokemongo --collection pokemons dumps/samples_pokemon.bson
mongorestore --drop --db pokemongo --collection customers dumps/DBEnvyLoad_customers.bson
mongorestore --drop --db pokemongo --collection orders dumps/DBEnvyLoad_orders.bson
mongorestore --drop --db pokemongo --collection products dumps/DBEnvyLoad_products.bson
```

### [Operador `$group` com vários atributos](./01_group.md)

### [Operador `$lookup` com pipeline](./02_lookup.md)

### [Operador `$addFields`](./03_addFields.md)

### [Operadores de cálculo](./04_operadoresDeCalculo.md)

