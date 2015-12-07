"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var figure = function figure() {
    _classCallCheck(this, figure);

    this.coordinates = {
        coordinatesX: [],
        coordinatesY: []
    };
    for (var i = 0; i < Array.prototype.slice.call(arguments).length; i++) {
        if (i == 0 || i % 2 == 0) {
            this.coordinates.coordinatesX.push(Array.prototype.slice.call(arguments)[i]);
        } else {
            this.coordinates.coordinatesY.push(Array.prototype.slice.call(arguments)[i]);
        }
    }
};

var figureOne = new figure(1, 2, 3, 4, 5, 6, 7, 8); //проверяем роспределение всех углов фигуры.
console.log("Кординаты Х: " + figureOne.coordinates.coordinatesX); //выводим координаты Х-ков.
console.log("Кординаты Y: " + figureOne.coordinates.coordinatesY); //выводим координаты Y-ков.