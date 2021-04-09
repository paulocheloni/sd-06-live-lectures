const { Router } = require('express');

const router = Router();

const { User } = require('../models');

router.get('/', async (req, res) => {
  const users = await User.findAll();

  const { message } = req.query;

  res.status(200).render('users/index', { users, message });
});

router.get('/new', (req, res) => {
  res.render('users/new');
});


router.get('/:id', async (req, res) => {
  const { id } = req.params;

  res.status(200).json({});
});


router.post('/', async (req, res) => {
  const { username, email, password } = req.body;

  const user = await User.create({ username, email, password });

  const message = 'Usuário cadastrado com sucesso';

  res.redirect(`/users?message=${message}`);
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