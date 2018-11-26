function displayData(someData: any){
    return someData;
}

function displayData2(someData: number){
    return someData;
}

function displayData3(someData: string){
    return someData;
}

// with this notation, i.e. <>, the data type will be auto-detected, and passed as a type to the parameter
function displayDataGenerics<TYPE>(someData: TYPE){
    // you can even use this in variable definition
    let someOtherData: TYPE;
    if (typeof someOtherData === "string"){
        console.log("dasdsadsa")
    }
    return someData;
}
console.log(displayData("Hello string parameter"));
console.log(displayDataGenerics('asdasd'));