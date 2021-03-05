const express = require('express')
const app = express()
const port = 3000

const something = 'teste';


app.get('/', (req, res) => {
  setTimeout(() => {
    res.json({ pid: process.pid });
  }, 5000);
});

app.get('/bug', (req, res) => {
  console.log("Cruj! Cruj! Tchau x!")
  res.status(200).send("Tchau!");
  process.exit(1);
});

app.listen(port, () => console.log(`Cruj! Cruj! Estamos de volta na porta ${port} e com pid ${process.pid}!`))