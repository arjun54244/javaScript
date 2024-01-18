let num = [1,2,3,4,5]
let b = num.toString(); // b is now a string
console.log(b, typeof b);
let student = "This is Roll no of student";
let c = num.join(student)
console.log(num.join(" This is Roll no \n")) //join function use to join the elements
console.log("c data"+c)

let d = num.pop(); // pop returns the array element
console.log("c data"+num)

let r = num.push(56)  // push returns the new array length
console.log("c data"+num)

let s = num.shift() // shift function remove the first array element
console.log( "c data"+s ,num);

let u = num.unshift(78) // unshift function add a new element in array
console.log("c data"+num);

let sp = num.splice(2,0,"raj") // unshift function add a new element in array
console.log("sp"+sp);


