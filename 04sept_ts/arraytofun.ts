let arr= new Array("Java Full Stack","2090","Typescript","Day1")

function show(arr1:string[]) {
    for(let i=0;i<arr1.length;i++){
        console.log(arr1[i])
    }
}

show(arr)
//spread operator
let arr1 = [1,2,3]
let arr2 = [4,5,6]

arr1.pop();
console.log("new length"+arr1.length);
arr1.push(5);
console.log("new length"+arr1.length);
console.log("type of arr1"+typeof(arr1));
let copyArray = [...arr1]
console.log("Copied array " + copyArray)

let newArray = [...arr1,10,20,30]
console.log("New array " + newArray)

let combinedArray = [...arr1,...arr2]
console.log("Combined array " + combinedArray)

console.log(arr.indexOf("2090"))