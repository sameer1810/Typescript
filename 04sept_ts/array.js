// continuous memory allocation
// static - at compile time, no resizing
// access - using index
// populating the array
// element values can be modified, but cant be deleted
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var cities = new Array("Hyderabad", "Vizag", "Mumbai");
console.log(numbers + " " + cities[1]);
for (var i = 0; i < cities.length; i++) {
    console.log(cities[i]);
}
console.log(cities.pop());
for (var i = 0; i < cities.length; i++) {
    console.log(cities[i]);
}
var sum = numbers.reduce(function (a, b) { return a + b; });
console.log("Sum =" + sum);
function pass(element, index, array) {
    return (element >= 50);
}
var passed = [49, 55, 68, 30, 80].filter(pass);
console.log(passed);
var values = ['hyderabad', 2, 'vizag', 3.4];
console.log(values);
