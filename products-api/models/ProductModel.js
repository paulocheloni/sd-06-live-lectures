const createProduct = (sequelize, Datatypes) => {
  const Product = sequelize.define('Product', {
    name: Datatypes.STRING,
    description: Datatypes.STRING,
    price: Datatypes.INTEGER,
    userId: Datatypes.INTEGER
  });

  Product.associate = (models) => {
    Product.belongsTo(models.User, { as: 'user', foreignKey: 'userId' })
  }

  return Product;
};

module.exports = createProduct;