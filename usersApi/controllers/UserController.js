const { Router } = require('express');
const UserService = require('../services/UserService');

const router = Router();

router.get('/', async (req, res) => {
  const users = await UserService.getAll();
  res.status(200).json(users);
})

router.get('/pesquisar', async (req, res) => {
  res.status(200).send("pesquisar");
})

router.get('/:id', async (req, res) => {
  const user  = await UserService.findById(req.params.id);

  if (!user) return res.status(404).json({ message: 'Usuário não encontrado'});

  res.status(200).json(user);
});

router.post('/', async (req, res) => {
  const { name, email } = req.body;

  const saved = await UserService.create(name, email);

  console.log(saved);

  if (!saved) return res.status(400).json({message: "Dados inválidos"});

  res.status(201).json({ok: true})
})

router.put('/', async (req, res) => {
  res.status(204).end()
})

router.delete('/', async (req, res) => {
  res.status(204).end()
})

module.exports = router;