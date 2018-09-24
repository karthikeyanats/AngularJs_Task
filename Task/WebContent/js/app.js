
var app = angular.module("simpleApp", []);

function simpleController() {
    this.collection = [{name: "ATS", father: "Bond", email: "info@aimjoro.com", phno: 012345, addr:"Towercross line", sex:"Female", city: "Madurai", state:"Tamil Nadu",
    	pin: 625020, course: "HTML" },];
    
    this.limit = 10;
}

simpleController.prototype.addEntry = function () {
    this.collection.push(this.newData);
    this.newData = '';
};



app.controller("simpleController", simpleController);


