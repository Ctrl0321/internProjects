"use strict";
exports.__esModule = true;
var enum_1 = require("./enum");
function printDetails(user) {
    console.log("name: " + user.name);
    console.log("age: " + user.age);
    console.log("email: " + user.email);
}
exports.printDetails = printDetails;
function reverseArray(array) {
    console.log(array.reverse());
}
exports.reverseArray = reverseArray;
function printPetDetails(pet) {
    console.log("Name: " + pet.name);
    console.log("isAlive: " + pet.isAlive);
    if ("legs" in pet) {
        console.log("Legs: " + pet.legs);
    }
    if ("color" in pet) {
        console.log("Legs: " + pet.color);
    }
}
exports.printPetDetails = printPetDetails;
function combine(a, b) {
    return a + " " + b;
}
exports.combine = combine;
function getDayName(day) {
    switch (day) {
        case enum_1.DaysOfWeek.MONDAY:
            return "monday";
        case enum_1.DaysOfWeek.TUESDAY:
            return "tuesday";
        case enum_1.DaysOfWeek.WEDNESDAY:
            return "wednesday";
        case enum_1.DaysOfWeek.THURSDAY:
            return "Thursday";
        case enum_1.DaysOfWeek.FRIDAY:
            return "friday";
        case enum_1.DaysOfWeek.SATURDAY:
            return "saturday";
        case enum_1.DaysOfWeek.SUNDAY:
            return "sunday";
        default:
            return "Invalid Day";
    }
}
exports.getDayName = getDayName;
