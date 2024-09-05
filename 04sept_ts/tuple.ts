var myTuple = [101, "Jashu"]

myTuple.push("9800012345")
myTuple.push("Bangaluru")
console.log(myTuple[0] +" " + myTuple[1] + " " + myTuple[2]+" "+myTuple[3])

console.log(myTuple.pop())
console.log('Popping '+myTuple.pop())
console.log(myTuple[0] +" " + myTuple[1] + " " + myTuple[2])

console.log(myTuple)

myTuple[0]=12345
console.log(myTuple)


//destructure
let [id, ename, mob] = myTuple;

console.log(id+" "+ename+ " "+mob);