const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const app = express()
const port = 3001

const BooksController = require('./controllers/BooksController');

app.use(cors());
app.use(bodyParser.json());


app.get('/', (req, res) => res.send('Hello World!'));

app.use('/books', BooksController);



app.listen(port, () => console.log(`Example app listening on port port!`))