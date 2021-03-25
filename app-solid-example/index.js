const express = require('express');
const bodyParser = require('body-parser');
const userController = require('./controllers/userController');

const connection = require('./models/connection');
const UserModel = require('./models/userModel');


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

const userModel = UserModel.factory(connection);
app.post('/users', userController.createUser(userModel));

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});