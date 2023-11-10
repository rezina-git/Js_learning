//alert('Hello');// Gives alerts message
//creating variable
// let x= 120;
//alert(x);
// console.log(x);
// let y=true;
// console.log(y);
// console.log(typeof y);
// let z=null;
// console.log(z);
// console.log(typeof z);
// let x=33;
// let y= "22";
// console.log(x+y); // concate operation will be performed.


// let icecream = Number(prompt("Type a number"));

// if (icecream===20){
//     console.log('Icream is vanilla flavour');
// }else if(icecream===30){
//     console.log( 'Ice-cream is butterscotch');
// }
// else{
//     console.log('Ic12e-cream is random');
// }
//  ** Switch case** 

// let  rejeena = Number(prompt("Type a number"));
// switch(rejeena){
//     case 10:
//     console.log("I like iceream");
//     break;
//     case 20:
//     console.log("I don't like Ice-cream");
//     break;
//     default:
//     console.log("Nothing");
// }
 //** For loop**
for( let i=0;i<10;i++){
    console.log('abhi');
}

//  ** while loop**
let i=0;
while(i<10){
    console.log('Hello');
    ++i;
 }

// ** Do while loop
//  let i=0;
//  do{
//     console.log('Hello');
//     ++i;
//  }
// while(i<10);
// Initialize a variable to store the sum
// let sum = 0;

// // Loop through the first 10 counting numbers (1 to 10) and add them to the sum
// for (i = 0; i <= 10; i++) {
//   sum += i;
// }

// // Log the sum to the console
// console.log("The sum of the first 10 counting numbers is: " + sum);
//          **Quiz regarding conditional statements**
// If a person is less than 18 then he/she cannot enter cafe.

// let person = Number(prompt('Enter the number'));
// if(person<18){
//     console.log("He/she cann't enter the cafe..")
// }
// else{
//     console.log('can enetr the cafe');
// }
// if the person is older than 18 and under 23 can ebter the cafe but cannot drink alcohol.
//  let person= 18;
//  if(person>=18 && person<23){
//     console.log('You can enter the cafe but cannot drink alcohol');
//  }
//  else{
//     console.log("Can enter the cafe and drink alcohol");
//  }
///////////while loop Quiz/////////////
// print even numbers from 132 to 148 0n console
//  let num = 132;
//  while(num<148){
//     console.log(num);
//     num+=2;
//  }
//  next process
// var num = 132;
// while(num<=148){
//     if(num%2 ===0){
//         console.log(num);
//     }
//     num++;
// }
//     **print the number between 25 and 100,divisible by 7 ,to console**
// let x=25;
// while(x<=100){
//     if(x%7===0){
//         console.log(x);
//     }
//     x++;
// }

///////////////Functions Arguments///////////////////
// function cube(num){
//     if (num == 25){
//         return 25;
//     }

//     return(num * num * num);
// }
// var number=cube(5);
// console.log('this is another console',number)
            //Function Quiz
// Create  a function called subtraction this function takes two arguments from the other and returns result. then console log result.

/*function subtraction(x,y){
    return y-x;
}
var result = subtraction(18,87);
console.log(result);*/

// Declare the function called  odd this function gonna take one argument is 'odd number',
//then it needs to return a boolean and console it.

/*var reju = function odd(x){
    if(x%2!==0){
        return true;
    }
    return false;
}
console.log(reju(4));*/

/*3. Declare the function called 'addition',it is gonna take one argument,then it needs 
to sum up all numbers from 1 to that argument and return the total value.Then you need to 
console log that total.*/

// let addition = function argu(n){
//     var res= 0;
//     for(var i=1; i<=n; i++){
//         res= res+i;
//     }
//     return res;
// }
// var addresult= addition(3);
// console.log(addresult);   

/////////////Methods/////////////////////////////
// Use .toUpperCase() to log 'academy' in all uppercase letters
console.log('academy'.toUpperCase());

// Use a string method to log the following string without whitespace at the beginning and end of it.
console.log('    Remove whitespace   '.trim());