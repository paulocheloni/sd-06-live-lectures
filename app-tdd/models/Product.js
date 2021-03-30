const connection = require('./connection');

const add = async ({ name, price}) => {
  await connection().then(db => db.collection('products').insertOne({ name, price}));

  return { name, price };
}

const findAll = async () => {
  return await connection().then((db) => db.collection('products').find({}, { projection: { _id: 0 }}).toArray());
}

module.exports = {
  add,
  findAll
}