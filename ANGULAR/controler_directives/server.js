
var express = require('express');
var app = express();

var path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.use(express.static(path.join(__dirname, './node_modules')));

app.listen(8000, function() {
console.log("listening on port 8000");
})
