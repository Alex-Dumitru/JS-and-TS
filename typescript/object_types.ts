// let vehicle = {

//     brand: "mercedes",
//     engine: 4.6

// }

let vehicle: {brand: string, engine: number} = {

    brand: "mercedes",
    engine: 4.6

}

vehicle.brand = 1; // in this form, it will not work, because of the type inference 
vehicle.brand = "BMW";
// by adding the {} in the object definition, we can specify the type of each property