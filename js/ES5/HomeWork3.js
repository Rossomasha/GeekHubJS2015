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