var toNumber = function (a, b){
    if(a&&b){
        a=+a;
        b=+b;
        return [a,b];
    }
    else{
        return null;
    }
};
var add = function (a, b){
    if (a&&b){
        return a + b;
    }
    else{
        return console.log("Необходимо ввести минимум пару чисел!");
    }
};

var fn = function(){
    var anonFunc = Array.prototype.slice.call(arguments);
    return function(){
        var enterVars = Array.prototype.slice.call(arguments);
        var answer = anonFunc[0].apply(null, enterVars);
        console.log('Ответ:' ,anonFunc[1].apply(null, answer));
    }
};

add = fn(toNumber, add);

add('1', '2');