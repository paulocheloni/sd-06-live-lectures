const express = require('express')
const rescue = require('express-rescue');
const app = express()
const bodyParser = require('body-parser');
const characterModel = require('./models/characaterModel')


app.use(bodyParser.json());


app.get('/characters', rescue(async (req, res) => {
  const characters = await characterModel.getAll();

  res.status(200).json(characters);
}));

app.get('/characters/:id', rescue(async (req, res, next) => {
  const { id } = req.params;

  const character = await characterModel.findById(id);
  
  if (!character) return res.status(404).json({message: 'Não encontrado'});

  res.status(200).json(character);
}));

app.post('/characters', rescue(async (req, res) => {
  const { name, cartoon } = req.body;

  console.log(name, cartoon);

  const character = await characterModel.create(name, cartoon);
  
  res.status(201).json(character);
}));

app.use((err, req, res, next) => {
  console.error(err.message);

  res.status(500).json({ message: 'Erro interno!' });
});


const PORT = 3000

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))