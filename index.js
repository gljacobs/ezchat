var express = require('express');

//app setup
var app = express();

var PORT = 4000
var server = app.listen(PORT, () => {
    console.log(`Listening on port number ${PORT}...`)
});

//static files
app.use(express.static('public'))