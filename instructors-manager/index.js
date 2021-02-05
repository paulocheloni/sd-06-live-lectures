const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
const { logMiddleware, auth } = require("./middlewares"); 


const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logMiddleware);
app.use(auth);

const instrutores = require('./data');

app.get('/instrutores', (req, res, next) => {
  console.log("Listando instrutores...");
  res.json(instrutores);
});

app.post('/instrutores', (req, res, next) => {
  console.log(req.body);

  const { nome, cargo } = req.body;
  const id = instrutores.length + 1;
  instrutores.push({ id, nome, cargo });
  
  res.json(`salvando novo usuário ${nome}`);
});

app.get('/pesquisa', (req, res, next) => {
  const { nome } = req.query;

  const usuario = instrutores.find(usuario => usuario.nome === nome);

  if (usuario) return res.send({ message: 'Usuário encontrado!', usuario });

  res.status(500).send({message: 'Usuário não encontrado!'  });
});

app.get('/instrutor/:id', (req, res) => {
  const { id } = req.params;

  const usuario = instrutores.find(usuario => usuario.id === parseInt(id));

  res.send(usuario);
});

app.get('/instrutor/:id', (req, res) => {
  const { id } = req.params;

  const usuarioIndex = instrutores.findIndex(
    (usuario) => usuario.id === parseInt(id)
  );

  res.send({ user: instrutores[usuarioIndex]});
})

app.put('/instrutor/:id', (req, res) => {
  const { id } = req.params;
  
  const usuarioIndex = instrutores.findIndex((usuario) => usuario.id === parseInt(id));

  console.log(usuarioIndex);

  const { nome, cargo } = req.body;

  if (usuarioIndex === -1) return res.status(500).send({message: 'usuário não encontrado'});

  instrutores[usuarioIndex] = { ...instrutores[usuarioIndex], nome, cargo };

  res.send({
    message: `Usuário ${id} alterado com sucesso!`,
    usuario: instrutores[usuarioIndex],
  });
});

app.delete("/instrutor/:id", (req, res) => {
  const { id } = req.params;

  const usuarioIndex = instrutores.findIndex(
    (usuario) => usuario.id === parseInt(id)
  );

  if (usuarioIndex === -1)
    return res.status(500).send({ message: "usuário não encontrado" });

  instrutores.splice(usuarioIndex, 1);

  res.send({
    message: `Usuário ${id} removido com sucesso!`,
  });
});

app.listen(3000);