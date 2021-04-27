const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const httpServer = require('http').createServer(app);
const socketHandler = require('./socketHandler');

app.use(express.static('public'));

const io = require('socket.io')(httpServer, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
});

io.on('connection', socketHandler(io));

const PORT = 3000;

app.use(bodyParser.json())
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home');
});

// app.listen(PORT, () => console.log('App listening on PORT %s', PORT));

httpServer.listen(3000);