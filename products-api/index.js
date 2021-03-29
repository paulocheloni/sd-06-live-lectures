const bodyParser = require('body-parser');
const express = require('express')
const app = express()
const port = 3000

app.use(bodyParser.json());

const controllers = require('./controllers');

app.use('/products', controllers.ProductsController);
app.use('/users', controllers.UsersController);
app.use('/campaigns', controllers.CampaignsController);

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port port!`))