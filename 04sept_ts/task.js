function printMultiplicationTable(number, upTo) {
    for (var i = 1; i <= upTo; i++) {
        console.log("".concat(number, " x ").concat(i, " = ").concat(number * i));
    }
}
function invokeMultiplicationTable() {
    var number = 5;
    var upTo = 10;
    printMultiplicationTable(number, upTo);
}
invokeMultiplicationTable();
