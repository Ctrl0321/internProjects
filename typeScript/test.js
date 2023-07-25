"use strict";
exports.__esModule = true;
var Functions_1 = require("./Functions");
var enum_1 = require("./enum");
var classes_1 = require("./classes");
// const array:number[]=[1,2,3]
//Question1
var user = {
    name: "Aathiq",
    age: 22,
    email: "aaa@gmail.com"
};
//Question2
var numbers = [1, 2, 3, 4, 5];
//Question3
var cat = {
    name: "meow",
    isAlive: true,
    legs: 4
};
var shark = {
    name: "shark",
    isAlive: true,
    color: "blue"
};
//Question6
var objectOfAddition = new classes_1.Addition;
var objectOfSubstraction = new classes_1.Substraction;
var objectOfMultiplication = new classes_1.Multiplication;
Functions_1.printDetails(user);
Functions_1.reverseArray(numbers);
Functions_1.printPetDetails(cat);
Functions_1.printPetDetails(shark);
console.log(Functions_1.combine("Hi", "Aathiq"));
console.log(Functions_1.getDayName(enum_1.DaysOfWeek.moday));
console.log(objectOfAddition.calculate(5, 2));
console.log(objectOfSubstraction.calculate(5, 2));
console.log(objectOfMultiplication.calculate(5, 2));
