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
var People = /** @class */ (function () {
    function People() {
    }
    People.prototype.displayDate = function () {
        console.log("some date");
    };
    return People;
}());
// if we add abstract keyword to the class definition, we can no longer inherit from it directly. That's because abstract classes should be used only for modeling,
// not for instantiating objects.
// let peopleClass = new People;
// peopleClass.displayDate();
var Kids = /** @class */ (function (_super) {
    __extends(Kids, _super);
    function Kids() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Kids;
}(People));
var KidsClass = new Kids;
KidsClass.displayDate();
