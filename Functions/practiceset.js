 //1.Write the program to print the marks of students in an object using for loop.

let marks ={
    harry : 90,
    Shubham : 6,
    lovish : 56,
    monika : 4 
}
for(let i=0;i<Object.keys(marks).length;i++){
   console.log("The marks of " +' ' + Object.keys(marks)[i] + " is " + marks[Object.keys(marks)[i]]) 
}
//2. write a program in q1. using for in loop 

for (let key in marks){
    console.log("The Marks of" + key + " are " + marks[key])
}

 //Write the program to print try again until user enters correct numbers.
let cn = 32
let i
while( i!= cn){
        i= prompt("Enter number")
        console.log("Try again")
    }
console.log("You have entered correct number")