var a = "something";
function foo() {
    console.log(a);
}
function bar() {
    console.log(b);
    var b;
}
foo();
bar();
