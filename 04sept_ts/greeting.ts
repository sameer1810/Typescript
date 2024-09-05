class Greeting {
    greet(msg : string) : void {
        console.log("Hello " + msg + "!!!");
    }
}

var obj = new Greeting();
obj.greet("Everyone");