const Product = require('../models/Product');

const add = (req, res) => {
  const { name, price } = req.body;

  if (!name) {
    res.status(500);
    res.json({ message: 'Nome não foi preenchido'});

    return;
  }

  if (!price) {
    res.status(500);
    res.json({ message: 'Preço não foi preenchido'});
    return;
  }

  Product.add({name, price});

  res.status(200)
  res.json({name, price});
};

module.exports = {
  add
}