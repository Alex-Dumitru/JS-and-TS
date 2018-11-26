// namespace myNameSpace {
//     export function displayData(){  // need to use export, to be able to use this function outside the namespace
//     // function displayData(){
//         console.log("Hi, to all!")
//     }

//     export const name = "alex";
//     // same this for properties
// }
// all is commented out because it was moved to module1.js

// import the module into our file
///<reference path="module1.ts"/>

console.log(myNameSpace.displayData()); // this generates error, if we don't have the function exported
console.log(myNameSpace.name);