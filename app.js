var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var PORT = 1127;

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


server.listen(PORT, function () {
  console.log(`listening on ${PORT} server`);
});