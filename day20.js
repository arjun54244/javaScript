// Map filter & Reduse

//Array Map Method
let arr = [45, 23, 21];

// let a = arr.map((value, index, array)=>{
//     console.log(value, index, array)
//     return value + 1;
// })
// console.log(a);

//Array filter method
// let arr2 = [45, 23, 21, 0, 5, 3, 4];
// let a2 = arr2.filter((a)=>{
//     return a<10
// });
// console.log(a2);

let arr3 = [1, 2, 2, 3, 4, 5, 1]
let newarr3 = arr3.reduce((a, b)=>{
    return a + b ;
})
console.log(newarr3);
