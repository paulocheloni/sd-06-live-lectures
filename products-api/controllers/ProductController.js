const { Router } = require('express');
const { Op } = require("sequelize");

const router = Router();

const { Product, User } = require('../models');

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

// eager loading
// router.get('/:id', async (req, res) => {
//   const { id } = req.params;

//   console.log(id)
//   const product = await Product.findByPk(id, {
//     include: { model: User, as: 'user' }
//   });

//   res.status(200).json(product);
// });

// lazy loading
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const product = await Product.findByPk(id)

  const user = await product.getUser();

  res.status(200).json({ ...product.dataValues, user });
});


router.post('/', async (req, res) => {
  const { name, description, price, userId } = req.body;

  console.log(Product);

  const product = await Product.create({ name, description, price, userId });

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