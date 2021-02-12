const express = require('express')
const app = express()
const port = 3000

const bodyParser = require('body-parser');
app.use(bodyParser.json());

// shortand
// const { userController } = require('./controllers');
const userController = require('./controllers/UserController');

app.use('/users', userController);

app.listen(port, () => console.log(`Example app listening on port port!`))
