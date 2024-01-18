let marks = {
    harry : 90,
    Arjun : 95,
    Subham : 56,
    karna : 4,
    ravi : 64,
    Rahul :67,
    Ankush : 67
}
let ages = {
    harry : 37,
    Arjun : 21,
    Subham : 40,
    karna : 14,
    ravi : 22,
    Rahul : 23,
    Ankush : 21
}

//problem no 1
// for (let i=0; i<Object.keys(marks).length; i++){
//   console.log ("The marks of " + Object.keys(marks)[i] + "are" + marks[Object.keys(marks)[i]])
// }

// for (let i=0; i< Object.keys(marks).length; i++){
//   console.log(Object.keys(marks)[i] , marks[Object.keys(marks)[i]]);
// }


//problem no 2
// console.log(marks["harry"])

for (let key in marks){
  //  console.log(" The marks of " + key + "are" + marks[key])
}

// Problem no 3
// Write a pogram to print "Try Again" until the user enter the corroct number?

// let cn = 4
// let i
// while (i != cn) {
//   i = prompt("Enter the number");
//   console.log("Try Again")
// }
// alert("wellcome");

//Problem No 4
// Write a function to find mean of 5 numbers

// const mean = ( a, b, c, d) =>{
//   let(a+b+c+d)/4
// }
// console.log(4,5,6,7)