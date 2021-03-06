var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname.replace('js', '/chat.html')); // !!!почему отрабатует /js
    //res.sendfile('chat.html');
});// Отправляет при входе на порт страницу ИНДЕКС

io.on('connection', function(socket){
    console.log('NEW user connected'); //слушает конекты к порту
    socket.on('disconnect', function(){
        console.log('user disconnected');
    }); //слушае отключения от порта
    socket.on('chat message', function(msg){
        console.log('message: ' + msg);
    }); //выводит сообщения чата в консоль
    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
    }); //выводит сообщения в браузер
    socket.broadcast.emit('hi'); //!!!недогнал что делает
    io.emit('some event', { for: 'everyone' }); //!!!недогнал что делает
});
// !!! почему сервер и js должны слушать разные порты хотя друг без друга не работают

http.listen(3000, function(){//слушает есть ли ктото на порту.
    console.log('listening on *:3000');
});
//Css не отрпбатует с внешнего файла при отдаче HTML через порт который слушает JS.