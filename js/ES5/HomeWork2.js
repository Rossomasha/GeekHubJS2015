"use strict";

var toNumber = function toNumber(a, b) {
    //конвертируем строку в число
    if (a && b) {
        a = +a;
        b = +b;
        return [a, b];
    } else {
        return null;
    }
};
var add = function add(a, b) {
    //сумируем аргументы
    if (a && b) {
        return a + b;
    } else {
        return console.log("Необходимо ввести минимум пару чисел!");
    }
};

var fn = function fn() {
    var anonFunc = Array.prototype.slice.call(arguments); //создаем масив с переданными аргуметами (функциями)
    return function () {
        var enterVars = Array.prototype.slice.call(arguments); //создаем масив с передаными аргументами (значениями)
        for (var i = 0; i < anonFunc.length; i++) {
            //подставляем переданные значения под все переданые функции
            enterVars = anonFunc[i].apply(null, enterVars);
        }
        console.log("Результат выполнения функции:", enterVars);
    };
};

add = fn(toNumber, add);

add('1', '2');