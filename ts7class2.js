var Greeter = /** @class */ (function () {
    function Greeter(greeting) {
        this.greeting = greeting;
    }
    Greeter.prototype.greet = function () {
        return "hello, " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("good afternoon sir");
console.log(greeter.greet());
