const { ObjectId } = require('mongodb');
const connection = require('./connection');

const getAll = async () => {
  return await connection().then((db) => db.collection('users').find().toArray())
}

const findById = async (id) => {
  return await connection().then((db) => db.collection('users').findOne(ObjectId(id)))
}

const create = async (name, email) => {
  await connection().then((db) => db.collection('users').insertOne({ name, email}))
}

module.exports = {
  getAll,
  findById,
  create
}