var express = require('express');
var app = module.exports = express();


// public assets
app.use(express.static(__dirname + '/'));



// server
var port = process.env.PORT || 3000;
app.listen(port);
console.log('listening on port ' + port);