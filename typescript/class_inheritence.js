var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Building = /** @class */ (function () {
    function Building() {
    }
    Building.prototype.escalators = function () {
        console.log('the escalator is moving');
    };
    return Building;
}());
var building = new Building;
building.escalators();
// inherit and overwrite 
var Building2 = /** @class */ (function (_super) {
    __extends(Building2, _super);
    function Building2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Building2.prototype.escalators = function () {
        console.log('adasds');
    };
    return Building2;
}(Building));
