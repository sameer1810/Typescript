var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var arr = new Array("Java Full Stack", "2090", "Typescript", "Day1");
function show(arr1) {
    for (var i = 0; i < arr1.length; i++) {
        console.log(arr1[i]);
    }
}
show(arr);
//spread operator
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
arr1.pop();
console.log("new length" + arr1.length);
arr1.push(5);
console.log("new length" + arr1.length);
console.log("type of arr1" + typeof (arr1));
var copyArray = __spreadArray([], arr1, true);
console.log("Copied array " + copyArray);
var newArray = __spreadArray(__spreadArray([], arr1, true), [10, 20, 30], false);
console.log("New array " + newArray);
var combinedArray = __spreadArray(__spreadArray([], arr1, true), arr2, true);
console.log("Combined array " + combinedArray);
console.log(arr.indexOf("2090"));
