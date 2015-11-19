(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}]},{},[1])