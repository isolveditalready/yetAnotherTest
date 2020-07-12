const http = require("http");
const app = require("express")();
const g = require("./guid");

const webSocketPort = 9090;
const webPort = 9091;

app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));
app.listen(webPort, () => {
    console.log(`web has started on port ${webPort}`);
});
const webSocketServer = require("websocket").server;
const httpServer = http.createServer();
const clients = {};
const games = {};

httpServer.listen(webSocketPort, () => {
    console.log(`listening on port ${webSocketPort}`);
});

const wsServer = new webSocketServer({
    httpServer: httpServer,
});

wsServer.on("request", (request) => {
    const connection = request.accept("", request.origin);
    connection.on("open", () => {
        console.log("------------------------opened");
    });
    connection.on("close", () => {
        console.log("------------------------close");
    });
    connection.on("message", (msg) => {
        const result = JSON.parse(msg.utf8Data);
        if (result.method == "create") {
            console.log(`${result.clientId} is trying create`);
            const gameId = g.guid();
            console.log(`gameId is ${gameId}`)
            games[gameId] = {
                id: gameId,
                balls: 20,
            };

            const payLoad = {
                method: "create",
                game: games[gameId],
            };

            const con = clients[clientId].connection;
            con.send(JSON.stringify(payLoad));
        }
    });
    const clientId = g.guid();
    console.log(`now clinetID is ${clientId}`)
    clients[clientId] = {
        connection: connection,
    };

    const payLoad = {
        method: "connect",
        clientId: clientId,
    };
    console.log(payLoad);
    connection.send(JSON.stringify(payLoad));
});