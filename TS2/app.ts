// console.log("hello world!");

let myName = "Alex";

// array
let hobbies: any[] = ["cooking","sports"];
hobbies = [100];

// tuple
let address: [string, number] = ["street",12];

// enum
enum Color {
    Gray,
    Green,
    Blue
}

let myColor: Color = Color.Green;

console.log(myColor);