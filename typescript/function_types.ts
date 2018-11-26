function stringFunction(): string{
    console.log("Hello, i'm a string")
    return "message" // otherwise error on return type, from the compiler: error TS2355: A function whose declared type is neither 'void' nor 'any' must return a value.
}

function cal(val1: number, val2: number): number{
    let total = val1 + val2;
    // let total: number = val1 + val2; the type of return can be defined also here
    return total;
}

cal(2,2);

// let universal = stringFunction;
// let universal = cal;
// universal(2,2);
// at this point, universal accepts any kind of function 
// but we can limit that, as follows

let universal: ()=>string;
// universal = cal; this will generate an error, because of the return type of cal function
universal = stringFunction;
// we can also enforce more types inside the parentheses 
// let universal: (value1: number, value2: string)=>number;