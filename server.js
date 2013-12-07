var express = require('express');
var server = express();

server.use(express.static(__dirname + '/www'));

server.get('/', function(req, res) { res.sendfile(__dirname + '/index.html'); });

server.listen(8220);
console.log('server is up on port 8220');
