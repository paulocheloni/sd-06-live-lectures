const { Router } = require('express');

const router = Router();

const { User, Product } = require('../models');

router.get('/', async (req, res) => {
  const users = await User.findAll();

  res.status(200).json(users);
});

// eager loading
// router.get('/:id', async (req, res) => {
//   const user = await User.findByPk(req.params.id, {
//     include: { model: Product, as: 'products' }
//   });

//   res.status(200).json(user);
// });

// lazy loading
router.get('/:id', async (req, res) => {
  const user = await User.findByPk(req.params.id);

  const products = await user.getProducts();

  res.status(200).json({ ...user.dataValues, products});
});

router.post('/', async (req, res) => {
  const { name, username, email, password } = req.body;

  const user = await User.create({ name, username, email, password });

  res.status(200).json(user);
});

// router.put('/:id', async (req, res) => {
//   const { id } = req.params;
//   const {  } = req.body;

//   res.status(200).json({});
// });

// router.delete('/:id', async (req, res) => {
//   const { id } = req.params;

//   res.status(200).json({});
// });

module.exports = router;