var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/test');

var mass = mongoose.model('Massage', new Schema({ massLine: String }));


var express = require('express');
var app = express();

app.use(express.static(__dirname.replace('js', '')));

app.get('/forum', function(request, response){
    mass.find().exec(function(err,results) {
       response.send(results);
    });
});

app.listen(3001, function(){//слушает есть ли ктото на порту.
    console.log('listening on *:3001');
});

// как работают события в js
// почему колекция называется massage(s)