function displayData(someData) {
    return someData;
}
function displayData2(someData) {
    return someData;
}
function displayData3(someData) {
    return someData;
}
// with this notation, i.e. <>, the data type will be auto-detected, and passed as a type to the parameter
function displayDataGenerics(someData) {
    // you can even use this in variable definition
    var someOtherData;
    if (typeof someOtherData === "string") {
        console.log("dasdsadsa");
    }
    return someData;
}
console.log(displayData("Hello string parameter"));
console.log(displayDataGenerics('asdasd'));
