//Q1. Write a program using prompt function to take input of age as a value from the user
//  and use alart to tell him if the can drive!

// let age = prompt("Enter your Age");
// age = Number.parseInt(age);

// const canDrive = (age)=>{
//     return age >= 18?true:false;
// }

// if(canDrive(age)){
//     alert("yes' you can drive")
// }
// else{
//     alert("you cannot drive")
// }

//Q2. In Q1 use conform to ask the user if he wants to see the prompt again?


// const canDrive = (age) => {
//     return age >= 18 ? true : false;
// }
// let runAgan = true;
// while (runAgan) {
//     let age = prompt("Enter your Age");
//     age = Number.parseInt(age);
//     if (canDrive(age)) {
//         alert("yes' you can drive")
//     }
//     else {
//         alert("you cannot drive")
//     }
//     runAgan = confirm("Do you want to play Again")
// }

// Q3. In the previous qustion use console.errer to log the error if the age entered is negativ.


// const canDrive = (age) => {
//     return age >= 18 ? true : false;
// }

// let runAgan = true;
// while (runAgan) {
//     let age = prompt("Enter your Age");
//     age = Number.parseInt(age);
//     if(age<0){
//         console.error("Please enter the valid age"); 
//         break; // use the break the program
//     }
//     if (canDrive(age)) {
//         alert("yes' you can drive")
//     }
//     else {
//         alert("you cannot drive")
//     }
//     runAgan = confirm("Do you want to play Again")
// }

// Q4. Write a program to Change the url to google.com (Redirecetion) if user enters a number greater the 4?

// let number = prompt("Enter your number");
// number = Number.parseInt(number);

// if(number>4){
//     location.href="https://google.com";
// }

// Q5. Change the background of the page to yollow, Red or any other color based on user input through prompt




// let runAgan = true;
// while(runAgan){
//     let color = prompt("Enter the color name");
//     document.body.style.background = color;
//     runAgan = confirm("Do you want to Change Again")
//     break;
// }
