const socket = window.io('http://localhost:3000');

socket.emit('userConnected', { userId: Math.random()});

socket.on('messageReceived', (data) => {
  console.log('dados recebidos', data);
});

socket.on('usersConnected', (data) => {
  console.log(data);
})

document.querySelector('#logout').addEventListener('click', () => {
  console.log('saindo');
  socket.disconnect();
})

// window.onbeforeunload = (e) => {
//   socket.disconnect();
//   return false;
// };
