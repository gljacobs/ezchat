var express = require('express');
var socket = require('socket.io');

//app setup
var app = express();

var PORT = 4000
var server = app.listen(PORT, () => {
    console.log(`Listening on port number ${PORT}...`)
});

//static files
app.use(express.static("public"))

//socket setup
var io = socket(server);

io.on("connection", (socket) => {
    console.log("Socket connection made:", socket.id);

    socket.on("chat", (data) => {
        io.sockets.emit("chat", data)
    })
})