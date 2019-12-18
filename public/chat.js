//make client connection
var socket = io.connect('http://localhost:4000');

//query DOM
var msg = $("#message");
    user = $("#user"),
    btn = $("#send"),
    output = $("#output");

//create events for emition
btn.on("click", () => {
    socket.emit("chat", {
        msg: msg.val(),
        user: user.val(),
    })
    msg.val("");
})

//listen for events
socket.on("chat", (data) => {
    output.append(`<p><strong>${data.user}: </strong>${data.msg}</p>`)
})

