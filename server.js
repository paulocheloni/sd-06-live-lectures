const net = require("net")
const PORT = 2708

const sockets = []
let guestID = 0

const server = net.createServer((socket) => {
  guestID++
  socket.guest = `Guest-${guestID}`
  sockets.push(socket)
  socket.write("Seja bem vindo.....")

  const disparo = (from, message) => {
    sockets.forEach((socket, index, array) => {
      if(socket.guest === from) return;
      socket.write(message)
    })
  }

  disparo(socket.guest, `O ${socket.guest} entrou na sala...`)

  socket.on('end', () => {
    sockets.splice(sockets.indexOf(socket), 1);
    const message = socket.guest + ' deixou a sala\n';

    disparo(socket.guest, message);
  })

  socket.on('data', (data) => {
    const message = `${socket.guest} > Disse: ${data.toString()}`

    disparo(socket.guest, message)
  })

  socket.on('error', (e) => {
    console.log('Aconteceu algum erro no socket', e.message)
  })

})

server.listen(PORT, () => { console.log(`Socket por aqui -> ${PORT}`) })
