const sum = (a,b)=> {
    return a+b ;
}
//Function can also be made without argument.
const hello = ()=>{
   console.log("Hey how are you? ") 
   return "hi" ;
}
//hello();// This hello function neither takes any value or returns any value
let v = hello();
let a = 1;
let b = 2;
let c = 3;
function oneplusAvg(x,y){
    return 1+ (x + y) /2
}
console.log(v);
console.log(sum(2,3));
console.log("One plus avg of a and b is ", oneplusAvg(a,b));
console.log("One plus avg of b and c is ", oneplusAvg(b,c));
console.log("One plus avg of a and c is ", oneplusAvg(a,c));

