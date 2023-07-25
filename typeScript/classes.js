"use strict";
exports.__esModule = true;
var Addition = /** @class */ (function () {
    function Addition() {
    }
    Addition.prototype.calculate = function (numberOne, numberTwo) {
        return numberOne + numberTwo;
    };
    return Addition;
}());
exports.Addition = Addition;
var Substraction = /** @class */ (function () {
    function Substraction() {
    }
    Substraction.prototype.calculate = function (numberOne, numberTwo) {
        return numberOne - numberTwo;
    };
    return Substraction;
}());
exports.Substraction = Substraction;
var Multiplication = /** @class */ (function () {
    function Multiplication() {
    }
    Multiplication.prototype.calculate = function (numberOne, numberTwo) {
        return numberOne * numberTwo;
    };
    return Multiplication;
}());
exports.Multiplication = Multiplication;
