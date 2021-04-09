const express = require('express');
const bodyParser = require('body-parser');

const UsersController = require('./controllers/UsersController');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
// app.set('views', './views');

app.get('/', (req, res) => {
  res.status(200).html('<h1>Usuários</h1>');
});

app.use('/users', UsersController);

app.listen(PORT, () => console.log('App listening on PORT %s', PORT))