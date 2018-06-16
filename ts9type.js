var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
function greet(n) {
    console.log("heloo " + n.name);
}
var p;
p = new Person();
p.name = "amit";
console.log(p.name);
var y = { name: "amrit", location: "sydney" };
greet(y);
