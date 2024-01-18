let class_marks_12 = [91, 82, 63, 84, false, "Not Present"];
// console.log(class_marks_12[0]);
// console.log(class_marks_12[1]);
// console.log(class_marks_12[2]);
// console.log(class_marks_12[3]);
// console.log(class_marks_12[4]);
// console.log(class_marks_12[5]);
// console.log(class_marks_12[6]);
// console.log("The length of marks Class 12 is ",class_marks_12.length);
class_marks_12[6] = 89; //Adding a new value to the array
class_marks_12[0] = 96; //Changing The value of an array
// console.log(class_marks_12)

// Problam no 1 print the array using loop

for(i=0; i < class_marks_12.length; i++){
    console.log(i,"Student",class_marks_12[i]);
}