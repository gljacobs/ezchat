//make client connection
var socket = io();

//query DOM
var msg = $("#message");
    user = $("#user"),
    output = $("#output"),
    feedback = $("#feedback"),
    btn = $("#send");

//create events for emission
btn.on("click", () => {
    if (user.val() && msg.val()) {
        socket.emit("chat", {
            msg: msg.val(),
            user: user.val(),
        });
        msg.val("");
        return false;
    }
})

msg.on("keypress", () => {
    socket.emit("typing", user.val());
})

//listen for events
socket.on("chat", (data) => {
    output.append(`<p><strong>${data.user}: </strong>${data.msg}</p>`);
    feedback.html("");
    $("#chat-box").scrollTop($("#chat-box").prop("scrollHeight"));
})

socket.on("typing", (data) => {
    feedback.html(`<p><em>${data} is typing...</em></p>`);
    $("#chat-box").scrollTop($("#chat-box").prop("scrollHeight"));
})
