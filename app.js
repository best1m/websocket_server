var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  console.log('user connected');
  socket.on('fromClient', function (data) {
    console.log(data);
  socket.broadcast.emit('fromServer', data);
  });



});


server.listen(7777, function () {
  console.log('listening on 1127 server');
});