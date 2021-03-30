const products = [];

const add = ({ name, price}) => {
  products.push({ name, price });
  return { name, price };
}

const findAll = () => {
  return products;
}

module.exports = {
  add,
  findAll
}