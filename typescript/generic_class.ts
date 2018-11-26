// class objectGenericsClass<TYPE1, TYPE2> {
class objectGenericsClass<TYPE1, TYPE2 extends string> {
// we can use constraints, to limit one abstract to specific type (you can see that now we have error in the instantiation below)
// constraint is put in place by extending specific type

    constructor(public value1: TYPE1, public value2: TYPE2){

    }

}

let obj1 = new objectGenericsClass<string, number>("Hello",2);
let obj2 = new objectGenericsClass<boolean, number>(true, 2);


let array1: number[] = [1,2,3];
let array2: Array<number> = [1,2,3]; // this is the same syntax, only we are using Array generic, with number type assigned, to create a numbers array