const { Router } = require('express');
const { Op } = require("sequelize");

const router = Router();

const { Product } = require('../models');

router.get('/', async (req, res) => {
  const products = await Product.findAll();

  res.status(200).json(products);
});

router.get('/search', async (req, res) => {
  const { q } = req.query;

  const product = await Product.findAll({
    where: {
      name: {
        [Op.like]: `%${q}%`,  
      }
    }
  });

  res.status(200).json(product);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const product = await Product.findByPk(id);

  res.status(200).json(product);
});

router.post('/', async (req, res) => {
  const { name, description, price } = req.body;

  console.log(Product);

  const product = await Product.create({ name, description, price });

  res.status(201).json(product);
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, description, price } = req.body;

  await Product.update(
    { name, description, price },
    {
      where: { id }
    }
  )

  res.status(200).json({});
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  await Product.destroy(
    {
      where: { id }
    }
  )


  res.status(204).end();
});

module.exports = router;