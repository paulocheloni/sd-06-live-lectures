module.exports = (io) => {
  const sockets = {};

  return (socket) => {
    console.log(`Novo usuário conectado ${socket.id}`);

    socket.on('userConnected', (data) => {
      sockets[socket.id] = data;

      io.emit('usersConnected', sockets);
    })
    
    socket.on('messageSent', (data) => {
      console.log(data);

      socket.broadcast.emit('messageReceived', data);
    });

    socket.on('disconnect', () => {
      delete sockets[socket.id];
      io.emit('usersConnected', sockets);
      console.log(`${socket.id} desconectado`);
    })
  }
};