var express = require('express');
var server = express();

// register middlewares
server.use(express.static(__dirname + '/www'));

// test REST API
server.get('/', function(req, res) { res.sendfile(__dirname + '/index.html'); });
server.get('/login', function(req, res) { res.sendfile(__dirname + '/www/app/login/template/login.html'); });

// production REST API
server.get('/admin', function(req, res) { res.sendfile(__dirname + '/index.html'); });


server.listen(8220);
console.log('server is up on port 8220');


