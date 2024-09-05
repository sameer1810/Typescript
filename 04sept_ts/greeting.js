var Greeting = /** @class */ (function () {
    function Greeting() {
    }
    Greeting.prototype.greet = function (msg) {
        console.log("Hello " + msg + "!!!");
    };
    return Greeting;
}());
var obj = new Greeting();
obj.greet("Everyone");
