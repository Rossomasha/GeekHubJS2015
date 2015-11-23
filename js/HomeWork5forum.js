var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/test');

var mass = mongoose.model('Massage', new Schema({ name: String }));

//var massage = new mass({ name : "Hi!" });

var express = require('express');
var app = express();

app.get('/forum', function(request, response){
    mass.find(/*{name : "Hi!"}*/).exec(function(err,results) {
       response.send(results);
    });
    //res.sendFile(__dirname.replace('js', '/forum.html'));
});

app.listen(3001, function(){//слушает есть ли ктото на порту.
    console.log('listening on *:3001');
});

//massage.save(function (err) {
//    console.log(err ? "D'oh!" : 'Message add!');
//    mongoose.disconnect();
//});

// как работают события в js
// почему колекция называется massage(s)