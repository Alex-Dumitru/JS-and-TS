"use strict";
// console.log("hello world!");
var myName = "Alex";
// array
var hobbies = ["cooking", "sports"];
hobbies = [100];
// tuple
var address = ["street", 12];
// enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor);
