const net = require("net")
const client = new net.Socket()

const stdin = process.openStdin()

client.connect(2708, '127.0.0.1', () => {
  stdin.addListener('data', (mensagem) => {
    const message = mensagem.toString().trim()

    client.write(message)
  })
})

client.on('data', (data) => {
  console.log('' + data)
})

client.on('close', () => {
  console.log("Voce saiu da sala...")
})
