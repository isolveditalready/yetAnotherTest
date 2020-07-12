const WebSocket = require('ws')
const wss = new WebSocket.Server({
  port: 8080

})

wss.on('connection', (ws) => {
  ws.on('message', (msg) => {

    msg = JSON.parse(msg)
    console.log(`msg is ${msg}`)
    console.log(msg)

    if (msg.type == 'name') {
      ws.personName = msg.data;
      return;
    }
    wss.clients.forEach((client) => {
      if (client != ws) {
        client.send(JSON.stringify({
          name: ws.personName,
          data: msg.data
        }))
      }


    })

  })

  ws.on('close', () => {
    console.log("I lose a client")
  })

  console.log("One more client connected")
})