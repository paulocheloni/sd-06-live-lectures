const createProduct = (sequelize, Datatypes) => {
  const Product = sequelize.define('Product', {
    name: Datatypes.STRING,
    description: Datatypes.STRING,
    price: Datatypes.INTEGER
  });

  return Product
};

module.exports = createProduct;