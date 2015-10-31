var toNumber = function (a, b){//конвертируем строку в число
    if(a&&b){
        a=+a;
        b=+b;
        return [a,b];
    }
    else{
        return null;
    }
};
var add = function (a, b){//сумируем аргументы
    if (a&&b){
        return a + b;
    }
    else{
        return console.log("Необходимо ввести минимум пару чисел!");
    }
};

var fn = function(){
    var anonFunc = Array.prototype.slice.call(arguments);//создаем масив с переданными аргуметами(функциями)
    return function(){
        var enterVars = Array.prototype.slice.call(arguments);//создаем масив с передаными аргументами (значениями)
        var answer = anonFunc[0].apply(null, enterVars);//значения масива приводим к числу
        console.log('Ответ:' ,anonFunc[1].apply(null, answer));//сумируем значения масива
    }
};

add = fn(toNumber, add);

add('1', '2');