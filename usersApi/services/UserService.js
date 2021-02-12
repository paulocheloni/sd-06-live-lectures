const { ObjectId } = require('mongodb');
const User = require('../models/User');

const getAll = async () => {
  return await User.getAll();
}

const findById = async (id) => {
  return await User.findById(id);
}

const isValid = (name, email) => {
  if (!name) return false;
  
  return true;
}

const create = async (name, email) => {
  const userValid = isValid(name, email);

  if (!userValid) return false;

  await User.create(name, email);

  return true;
}

module.exports = {
  getAll,
  findById,
  create
}