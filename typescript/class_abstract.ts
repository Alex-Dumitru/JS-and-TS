abstract class People {

    displayDate(){
        console.log("some date");
    }
}

// if we add abstract keyword to the class definition, we can no longer inherit from it directly. That's because abstract classes should be used only for modeling,
// not for instantiating objects.

// let peopleClass = new People;
// peopleClass.displayDate();

class Kids extends People{

}

let KidsClass = new Kids;
KidsClass.displayDate();