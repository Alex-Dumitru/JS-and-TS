// a way to describe data, for other objects to use

interface AutomobileInterface{

    // FOR INTERFACE INHERITANCE - if we add a ? to the properties and functions definition, we make them optional
    brand?: string;
    speed?: number;
    speedMethod(velocity: number): void

// original values
    // brand: string,
    // speed: number,
    // speedMethod(velocity: number): void

}

// implement the interface into an object (it's like specifying it as a type)
const automobile: AutomobileInterface ={

    brand: "fiat",
    speed: 200,
    speedMethod(){
        console.log(`this ${this.brand} is going at ${this.speed} miles / hour`)
    }

};

// implement the interface into a function
// function car1(automobile){
// - if we don't specify the type, we can actually re-write the objects properties, and mess up the program
function car1(automobile: AutomobileInterface){

    automobile.speed = 500;
    // automobile.speed = "speeeeeed";     this would actually work just fine if we leave the function input parameter untyped (type any, by default)
    console.log(`this ${automobile.brand} is going at ${automobile.speed} miles / hour`);


}

car1(automobile);


// implement the interface in a class
class AutomobileClass implements AutomobileInterface{

    brand!: string;
    speed!: number;

    speedMethod(speed: number){
        console.log(`My car is going at ${speed}`);
    }

}

let carObject = new AutomobileClass();
carObject.speedMethod(200);


// Interface inheritance 

// create a new interface based on the old one
interface AutomobileInterface2 extends AutomobileInterface {
// by default, if we don't specify anything in this new interface, we inherit everything, so it's basically pointless :))), just creating a copy with different name

// see coment in original interface 1st!!!. Properties are optional. We can overwrite them here, and make them mandatory, by not specifying the ?
    brand: string;
    speed: number;
}
// create a new object
const automobile2: AutomobileInterface2 = {

    brand: "bmw",
    speed: 300,
    speedMethod(speed){
        console.log(`my ${this.brand} faaaast. zooming at ${this.speed}!`)
    }
}