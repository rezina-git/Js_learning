// A js function is block of code designed to perform particular task.
// **Find the average of three numbers using function.**
function avg(x,y,z){
    console.log("Done")// To print done after every o/p
    return (x+y+z)/3;
    
}
let a = 5
let b = 6
let c = 7
console.log("The Average of three number is ",avg(a,b,c));
console.log("The Average of a and b is ",avg(a,b,0));
console.log("The Average of b and c is ",avg(0,b,c));
console.log("The Average of c and d is ",avg(c,0,a));

// **Arrow Function**
/* A shorter way of writing functions by using the special 'fat arrow' ()=>
By using this we don't need to write keyword function instead  we first include parameters inside () and then add an arrow => that points to function body surrounded in {}  */
 const rectanglearea  = (width, height) =>{
    let area = ( width * height);
    return area;
 }
 console.log("The area of rect is",rectanglearea(2,3));
// Function can also be made without argument
 const hello = ()=>{
    console.log("Hey how are you?")
 }
 hello();// calling the function that doesnot return any value
 // Function can also be created whch doesnot take value but still  returns by usnig return keyword.
 const hi = ()=>{
    console.log("Hey how are you?")
    return hello;
 }
 let v = hi(); // hello would come inside v
 console.log (v);// Things that returns,come inside this and get replaced, here value of v become hello

 //1. Write a program to print the marks of student using for loop
 let marks = {
   Ram : 96,
   shubham :9,
   Monika : 40
 }                //object.keys(marks).length will give you the length and the keys that are inside the object.
 for( let i =0;i<Object.keys(marks).length ; i++){
console.log("The marks of " + Object.keys(marks)[i] + " are "+ marks[Object.keys(marks)[i]])
 }
 //Solve problem 1 using for in loop

 for ( let key in marks){
   console.log("The marks of "+ key+ " are " + marks[key] )
 }
 // Write a function to find the mean of 5 numbers.
  const mean = (a,b,c,d,e) =>{
   return (a+b+c+d+e)/5;
  }
  console.log("The mean of five numbers is",mean(1,2,3,4,5))