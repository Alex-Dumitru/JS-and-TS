class Tree {

    // define the object constructor
    constructor(public branch: string, private leaf:string){

        this.branch = branch;
    }

    // define a method
    public moveLeaf(){
        console.log(`leaf is moving in the wind`)
    }
}


let tree1 = new Tree("a","b");
tree1.moveLeaf()