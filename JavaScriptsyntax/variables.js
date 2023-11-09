/*Variables allows the computer to store and manipulate data in dynamic fashion.
There are three ways t declare variables in js: Var, let const*/
for ( var i=0; i<4;i++) {
    console.log("i",i)
}
if (true){
    i =10 ;
    console.log("from if",i)
}
function abc(){
    console.log("from function",i)
}
abc();
// Since var uses the global scope and can be access from anywhere let and const was introduce to resove this problem
for ( let  i =0; i<4;i++) {
    console.log("i",i)
}
function abc(){    
    console.log("from function",i) // Inthis case o/p will give i is not defined
}
abc();
//const is used for values like that cannot be changed.
const pi = 3.14;
 //pi =22/7;//o/p: Type:errorassignment to constant variable
console.log("Pi value",pi)