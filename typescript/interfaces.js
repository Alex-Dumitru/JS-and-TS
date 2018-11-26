// a way to describe data, for other objects to use
// implement the interface into an object (it's like specifying it as a type)
var automobile = {
    brand: "fiat",
    speed: 200,
    speedMethod: function () {
        console.log("this " + this.brand + " is going at " + this.speed + " miles / hour");
    }
};
// implement the interface into a function
// function car1(automobile){
// - if we don't specify the type, we can actually re-write the objects properties, and mess up the program
function car1(automobile) {
    automobile.speed = 500;
    // automobile.speed = "speeeeeed";     this would actually work just fine if we leave the function input parameter untyped (type any, by default)
    console.log("this " + automobile.brand + " is going at " + automobile.speed + " miles / hour");
}
car1(automobile);
// implement the interface in a class
var AutomobileClass = /** @class */ (function () {
    function AutomobileClass() {
    }
    AutomobileClass.prototype.speedMethod = function (speed) {
        console.log("My car is going at " + speed);
    };
    return AutomobileClass;
}());
var carObject = new AutomobileClass();
carObject.speedMethod(200);
// create a new object
var automobile2 = {
    brand: "bmw",
    speed: 300,
    speedMethod: function (speed) {
        console.log("my " + this.brand + " faaaast. zooming at " + this.speed + "!");
    }
};
