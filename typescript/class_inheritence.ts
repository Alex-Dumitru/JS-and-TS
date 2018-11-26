class Building {
    windows: string;

    escalators(){
        console.log('the escalator is moving');
    }
}

const building = new Building;

building.escalators();

// inherit and overwrite 
class Building2 extends Building{
    escalators(){
        console.log('adasds');
    }
}

