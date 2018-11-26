var myNameSpace;
(function (myNameSpace) {
    myNameSpace.name = "Alex";
    function displayData() {
        return myNameSpace.name;
    }
    myNameSpace.displayData = displayData;
})(myNameSpace || (myNameSpace = {}));
