//?:  Ternary operator->> Short hand if else statement  Syntax : (condition)? true expression: false expression
const isNepali = true;
const isuser = false;
 if (isNepali){
    console.log("Nepali Ho")
 }
 else(
    console.log("Haina")
 )
 // Using ternary operator
 isNepali ? console.log("Nepali honi"): console.log("Haina")

 //&& -> AND operator -->For working only on the true situatioin we use AND operators

 (isNepali && isuser) ? console.log("Both are nepali"): console.log("None of them are Nepali");

 // || OR OPERATOR --> Used for evaluating true staements If one value is true then condition is consider as true.
 (isNepali || isuser) ? console.log("Both are nepali"): console.log("None of them are Nepali");

 // ?? --> Nullish Operator It is used to provide a default value for variable or expression when value on left handside is nulll or undefined.

 let apple=null;// undefined
 console.log(apple ?? "Orange")

 //Comparison operators === : Checks value as wel as Datatype.

 let i = "10";
 let j = 10;

 (i===j)? console.log("same") : console.log("not same")