(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

//map

function map(arr, fu) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (fu) {
            fu(arr[i]);
            newArr.push(arr[i]);
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

//reduce

function reduce(arr, fu, initVal) {
    var retVal = arr[0];
    if (initVal === 0 || true) {
        retVal = initVal;
    }
    for (var i = 0; i < arr.length; i++) {
        if (fu) {
            retVal = retVal + fu(arr[i]);
        } else {
            return undefined;
        }
    }
    return retVal;
}

//forEach

function forEach(arr, fu) {
    for (var i = 0; i < arr.length; i++) {
        if (fu) {
            arr[i] = fu(arr[i]);
        }
    }
    return arr;
}

//some

function some(arr, fu) {
    for (var i = 0; i < arr.length; i++) {
        if (fu && fu(arr[i])) {
            return true;
        }
    }
    return false;
}

//every

function every(arr, fu) {
    for (var i = 0; i < arr.length; i++) {
        if (fu && !fu(arr[i])) {
            return false;
        }
    }
    return true;
}

//indexOf

function indexOf(arr, initVal) {
    for (var i = 0; i < arr.length; i++) {
        if (initVal == arr[i]) {
            return i;
        }
    }
    return -1;
}

//reverse

function reverse(arr) {
    var newArr = [],
        number = 0;
    for (var i = arr.length - 1; i >= 0; i--) {
        newArr[number] = arr[i];
        number++;
    }
    return newArr;
}

//join

function join(arr, initVal) {
    var newStr = '';
    for (var i = 0; i < arr.length; i++) {
        newStr = newStr + arr[i] + initVal;
    }
    return newStr;
}
},{}]},{},[1])