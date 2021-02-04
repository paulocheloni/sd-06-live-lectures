const express = require('express');
const fs = require('fs').promises;
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send("hello!");
});

app.get('/contatos', async (req,res) => {
  const file = await fs.readFile(`./contatos.json`);
  res.status(200).json(JSON.parse(file.toString()));
})


app.listen(3000);

