let car: string;
let engine: number;
let isFast: boolean;

car = "bmw";
engine = 5.4;
isFast = true;

let names: any;

names = 12;
names = "Alex";

let cars: any[] = ["Toyota", "BMW", "Mercedes"];
cars = ["Nissan"];


function cal(val1: number, val2: number): number{
    let total = val1 + val2;
    // let total: number = val1 + val2; the type of return can be defined also here
    return total;
}

cal(2,2)

