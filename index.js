var express = require('express');
var socket = require('socket.io');

//app setup
var app = express();

var PORT = process.env.PORT || 4000
var server = app.listen(PORT, () => {
    console.log(`Listening on port number ${PORT}...`)
});

//static files
app.use(express.static("public"))

//socket setup
var io = socket(server);

io.on("connection", (socket) => {
    console.log("Socket connection made:", socket.id);
    //handle chat
    socket.on("chat", (data) => {
        io.sockets.emit("chat", data)
    });
    //handle typing
    socket.on("typing", (data) => {
        socket.broadcast.emit("typing", data)
    });
})

