'use strict';

//***********************************************
//Обычное прохождение лаберинта.

// 1 level
while (isFree('north') && north()) {} // Метод движения до упора в стену.
// 2 level
while (isFree('east') && east()) {}
// 3-4 level
while (isFree('east') && east() || isFree('south') && south()) {}
// 5 level
while (isFree('west') && west() || isFree('south') && south()) {}
while (isFree('west') && west() || isFree('north') && north()) {}
while (isFree('west') && west() || isFree('south') && south()) {}
while (isFree('east') && east()) {}
// 6 level
while (isFree('east') && east() || isFree('south') && south()) {}
while (isFree('east') && east() || isFree('north') && north()) {}
while (isFree('east') && east() || isFree('south') && south()) {}
north();
while (isFree('west') && west() || isFree('south') && south()) {}
while (isFree('east') && east()) {}
// 7 level
var e;
while (isFree('south') && south()) {}
while (isFree('east') && east()) {}
while (isFree('north') && north()) {}
while (isFree('east') && east()) {}
while (isFree('east') && east() || isFree('south') && south()) {}
while (isFree('west') && west()) {}
while (isFree('south') && south()) {}
while (isFree('west') && west()) {}
while (e != "end") {
    while (isFree('south') && south()) {}
    while (isFree('east') && e != "end") {
        e = east();
    }
}

//***********************************************
//Прохождение всего лабиринта по правилу правой руки;

var go, exit; //Переменные слушают какое направление в данный момент щитается вперед и не закончилисьли уровни.
function findWay() {
    //Определяет какое доступное направление в начале хода и принемает его как направление вперед.
    if (isFree('north')) {
        go = north;
    } else if (isFree('east')) {
        go = east;
    } else if (isFree('south')) {
        go = south;
    } else {
        go = west;
    }
}
function steps() {
    if (go == north && exit != "end") {
        //Проверка какое направление сейчас ВПЕРЕД и не закончился ли уровень.
        while (!isFree('east') && isFree('north')) {
            //Двигается ВПЕРЕД пока с права  есть стена а впереди нет препятствий.
            go();
        }
        if (isFree('east')) {
            //Если справа стена заканчивается то совершает поворот направо и переназначает новое направление вперед после чего перезапускает функцию.
            exit = east();
            go = east;
            steps();
        } else if (isFree('west')) {
            //Если и справа и переди есть стена то поворачивает на лево, переопредиляет направление вперед и перезапускает функцию.
            exit = west();
            go = west;
            steps();
        } else {
            exit = south();
            go = south();
            steps();
        }
    } else if (go == east && exit != "end") {
        while (!isFree('south') && isFree('east')) {
            go();
        }
        if (isFree('south')) {
            exit = south();
            go = south;
            steps();
        } else if (isFree('north')) {
            exit = north();
            go = north;
            steps();
        } else {
            exit = west();
            go = west;
            steps();
        }
    } else if (go === south && exit != "end") {
        while (!isFree('west') && isFree('south')) {
            go();
        }
        if (isFree('west')) {
            exit = west();
            go = west;
            steps();
        } else if (isFree('east')) {
            exit = east();
            go = east;
            steps();
        } else {
            exit = north();
            go = north;
            steps();
        }
    } else if (go === west && exit != "end") {
        while (!isFree('north') && isFree('west')) {
            go();
        }
        if (isFree('north')) {
            exit = north();
            go = north;
            steps();
        } else if (isFree('south')) {
            exit = south();
            go = south;
            steps();
        } else {
            exit = east();
            go = east;
            steps();
        }
    } else {
        console.log("Поздравляю вы прошли все лабиринты!");
    }
}
findWay();
steps();

//***********************************************
//Прохождение всего лабиринта одной функцией chit();

var step = "Begin:",
    returnAnser = true; //переменные для отслеживания направления и возвращаемого значения при использовании east();
function chit() {
    if (isFree('west') && step[step.length - 1] != 'R') {
        //проверка свободно ли направление длвижения и не происходит ли реверсивное движение.
        while (isFree('west')) {
            west();
            step = step + 'L'; //Дописывает в переменную в какую сторону было совершено движение.
        };
    } else if (isFree('east') && step[step.length - 1] != 'L') {
        while (isFree('east') && returnAnser != "end") {
            //Крутить цикл пока east() не вернет "end"
            returnAnser = east();
            step = step + 'R';
        };
    } else if (isFree('south') && step[step.length - 1] != 'T') {
        while (isFree('south')) {
            south();
            step = step + 'B';
        };
    } else if (isFree('north') && step[step.length - 1] != 'B') {
        while (isFree('north')) {
            north();
            step = step + 'T';
        };
    } else {
        north();
        step = step + "trable-T"; //В случае тупика сделать шаг в верх и отметить направление шага в истории как trable-T
    }
}
while (returnAnser != "end") {
    //Крутим функцию в цикле пока east() не вернет "end"
    chit();
};
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
"use strict";

map(function (x) {
  return x + 1;
});
map(function (x) {
  return x + 3;
});