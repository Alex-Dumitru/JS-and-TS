// Output to console
console.log("hello world");
// Function definition
function add_numbers(a,b)
{
    var num1 = a;
    var num2 = b;
    return num1 + num2;
}
// Function call
console.log(add_numbers(1,2))
// Object creation
var car = {
    make : "volvo",
    color : "red",
    speed : 200,
    drive : function(){ return "drive";},
    // object nesting
    engine: {
        size : 2.0,
        make : "bmw",
        fuel : "petrol",
        // an array as a property, that holds also an object
        pistons : ["p1", "p2", {}]
    }
};
// Array creation
var shoppinglist = [
    "Apple",
    "Orange",
    "Pear"
];
// An array can hold other data times
var nestedarray = [
    "string",
    100,
    ["embed", 200],
    {car : "ford"},
    function(){ return "drive";}
]

// create new property or member in an existing object

car.model = "XC90";

// delete exiting property or member in an existing object

delete car.color;

// Modify members in an array

nestedarray[0] += " abc";  // exiting member
nestedarray[5] = "new member";
nestedarray[10] = 99999;     // will create the difference in indexes with null values
nestedarray["test"] = 'test'; // will create an element with index "test", but will not be iterable
// in console, check the array, for the prototype definition. There we have all methods available for it
// for ex: 
// .push - adds element from end of the list
// .unshift - adds element from beginning of the list
// .shift - deletes (and returns) element from beginning of the list
// .pop - deletes (and returns) element from end of list
// .splice(n,m) - deletes from given index(n), a given number of elements(m)
// .splice(n,0,x,x,x) - adds element after a given index(n). We have to mention 0 as 2nd parm (meaning we don't want to delete)
// .splice(n,m,x,x) - replaces nr of elements(m), starting from index(n), with list of elements(x,x)

// Memory hoisting
//  - for variables - it just stores the variable definition in memory during pre-processing. This means we can reference them before defining them
//                  - even though they are defined, if they are hoisted, then they are undefined, meaning at the point of reference before definition, they exist but have value Undefinied.
//  - for functions - they are stored in memory and executed as a whole. Meaning that when refenced, they will be run. 
console.log(myName, printName());
var myName = "Alex";
function printName()
{
    console.log(a, embed());
    var a = 100;
    function embed(){return "hello"; }

    return "John Doe";
}

// Clobbering the window scope

var globalVar = "This is my global variable";

function runExecution()
{
    var a = 10;

    function doSomething()
    {
        var globalVar = "This is NOT a global var, but it is local"  // creating local with var(or const) keyword
        globalVar = "Affecting global var" // re-writing the global variable
        test1 = "New string 1"; // this is not global or local variable. So it will be created automatically as a global var
        test2 = "New string 2"; // this is called "Clobbering the window scope" (namespace pollution, from python)
        test3 = "New string 3";
    }
}

// THIS keyword
// - by default it points to the Window object
// - but it can change:

console.log( this );

var thisObject = {
    prop: this, // points to window
    method: function(){return this;} // here it points to the thisObject
};

var thisArray = [
    this, // points to window
    function(){return this;}  // here it points to the thisArray
];

function thisGlobal(){
    return this; // points to window
}

thisGlobal(); // by default it points to window
thisGlobal.call(thisObject); 
// but here, we treat the function as an object, and use call method to call the subroutine defined 
// in the function. By passing an argument, we say that 'this' = to 'thisObject', 
// so it will point to the object, and not the window, changing the context

new thisGlobal(); // creates a new context. Here, this = {} refers to a new blank object

// Constructor functions

// - naming convention: starts with capital letter 

function Apple( x, y, color, score ){
    // 'this' acts similar to 'self' from python
    this.x = x;
    this.y = y;
    this.color = color;
    this.score = score;
}

new Apple(10, 20, 'red', 200); // we want to create a new instance with 'new' keyword, so we can a new context from "this" keyword
// we need to assing it to a variable, to we can use it, otherwise it will not be possible to reference it
var apple1 = new Apple(10, 20, 'red', 200); // we want to create a new instance with 'new' keyword, so we can a new context from "this" keyword


// Prototypes
// - special objects (general or global) that can use used inside other objects

apple1 = {
    color : "red",   //unique ppt
    weight : 20,
    eat(){},            // common method
    throw(){}
}
apple2 = {
    color : "yellow",
    weight : 10,
    eat(){},
    throw(){}
}
apple3 = {
    color : "green",
    weight : 15,
    eat(){},
    throw(){}
}

//- for the common methods we can use a prototype object

// - basic constructor
function Apple( color, weight ){
    this.color = color;
    this.wight = weight;
}

// we add a prototype to it (using prototype property), and when objects are created, they will have access to the prototype as well
Apple.prototype = {
    eat: function(){return "eat the apple";},
    throw: function(){return "throw the apple";}
};

// Comparison

// 10 == "10";
// returns true
// 10 === "10";
// returns false
// and extra = sign forces polymorphism off 

var carsLeft = 1,
    carsRight = 0,
    greenMan = "no";

if (greenMan == "yes")
{
    console.log("cross the road");
} 
else if ( carsLeft === 0 && carsRight === 0)
{
    console.log("all clear. cross the road")
} 
else 
{
    console.log("stay where you are")
}

//Loops

var classRegister = ["a","b","c"];
// from 0 to n
for (var i =0; i < classRegister.length; i++)
{
    console.log(classRegister[i]);
}
// from n to 0
for (var i = classRegister.length -1; i >=0; i--)
{
    console.log(classRegister[i]);
}
// FOR IN loop 
for (var index in classRegister)
{
    console.log(classRegister[index])
}


// ES6 (ECMA Script 6) = javascript 6


if (true)
{
    var symbolName = "value reference in memory";   // this will be created outside the scope of the if statement (meaning global in this case)
    let letSymbol = "scoped value";                 // "let" respects the scope
    const symName = "constant value in memory";     // so as "const"
}

// so we should use let in our loops!!! To respect the context
for (let i =0; i < classRegister.length; i++)
{
    console.log(classRegister[i]);
}


// DOM - document object model
// basically the page that is rendered on the web

console.dir(document) // to map out the directory structure of the document - just in console

document; // is also a global variable

document.getElementsByTagName('p'); // extract all paragraph tags in an array
document.getElementById("hello");   // this will get a specific element, with that ID. 
//Can use also dir(document.getElementById("hello")) to get the object of that element
document.getElementsByClassName("pClass"); // get elements by class name

// get elements by CSS selectors

document.querySelectorAll('#hello');  // select by id
document.querySelectorAll('.pClass'); // select by class
document.querySelectorAll('#hello, .pClass'); // or combine the query
//advanced CSS selector
//document.querySelectorAll( ' p[data-content="123"], body > h1.pClass > span' );

// change elements

document.getElementById('hello');
document.getElementById('hello').innerText="new world";
var pHello = document.getElementById('hello');
pHello.innerText=("new new world");
pHello.innerHTML += " order <span> well well </span>";  // allows to modify the HTML between the tags
pHello.outerHTML = '<h2 id="hello"> new new world order <span> well well </span></h2>' // allows to modify HTML tags

// how to style an element
var el = document.getElementById('style');
el.style.background = "blue";
el.style.color = "white";
el.style.width = "200px";
// OR
el.style.cssText = "background:red; color:black; width:300px";
el.style.cssText += "height:300px";



//EVENTS

var select = document.getElementsByName('cars')[0];
select.onclick = function( event ){
    console.log( event );
};

// event = symbol name that references the even created automatically by the JIT compiler
// For more events on the same actions, we need to use addEventListener

function clickCallback( event ){
    console.log("clicked by add event handler");
}

select.addEventListener('click',clickCallback);
select.removeEventListener('click',clickCallback); //in case you want to remove that even

// Create and append child elements to a page

var element = document.createElement('div');  // create the element. In this case, a <div>

element.style.cssText = "width:200px; height:200px; background:purple" // style the element

element.onclick = function(){ alert('hello');};  // add action to the element

document.body.appendChild( element ); // add the element to the <body> of the page. This will append as the last element in the <body>

var target = document.getElementById('yellow'); // get a target element, to use as an insertion point

document.body.insertBefore(element, target); // now append the new element above the targeted element


// SET BUTTON TO CHANGE THE BOX

// function that we want to run when button SET is clicked
function set(){
    // get the array with all elements defined as cssProperty (the 3 selectors)
    let elements = document.getElementsByName("cssProperty");  // THIS IS NEEDED JUST ONE TIME, SO IT'S GOOD TO TAKE IT OUT OF THE FUNCTION
    // loop though them
    for (let index = 0; index < elements.length; index++)
    {
        // for each element, extract the id attribute (background, width, height)
        let cssProperty = elements[index].getAttribute('id');
        // for each element, extact the value selected (1 of 3)
        let cssValue = elements[index].value;

        console.log(cssProperty, cssValue);

        // create a pointer to the div element that we want to modify
        let div = document.getElementById('modify');  // THIS IS NEEDED JUST ONE TIME, SO IT'S GOOD TO TAKE IT OUT OF THE FUNCTION
        // change the style attribute that has the cssProperty name, and assign the cssValue which is selected
        div.style[cssProperty] = cssValue;
    }
}

// Extract the element with id=set (expecting to be the button) and add the 'onclick' event to it, that will perform the function set() when clicked
document.getElementById('set').addEventListener('click',set);