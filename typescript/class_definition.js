var Tree = /** @class */ (function () {
    // define the object constructor
    function Tree(branch, leaf) {
        this.branch = branch;
        this.leaf = leaf;
        this.branch = branch;
    }
    // define a method
    Tree.prototype.moveLeaf = function () {
        console.log("leaf is moving in the wind");
    };
    return Tree;
}());
var tree1 = new Tree("a", "b");
tree1.moveLeaf();
