let ws = new WebSocket("ws://192.168.56.102:9090")

ws.onmessage = msg => {
    const response = JSON.parse(msg.data)
    console.log("yhahoo")
    console.log(response)
    console.log("yhahoo2")
}