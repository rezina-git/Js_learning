// For grouping or listing interrelated data we use array.

let studentlist = ["Tom", "Tyson"]
//to add new data
studentlist[2]="Harry"
//OR
let studentname = new Array("Ram","Shayam","Harry")
//Since JS is dynamic type programming language we can use any any typle of value inside array
let studentoldlist = ["Tom", "Tyson",1,true,1n]

//Builtins Arrays functions in JS:
let studentnewlist = ["Tom", "Tyson"]
studentnewlist.push("Thomas","Hari")
studentnewlist.pop();
delete studentnewlist[1];
studentnewlist.unshift("Ram")
 console.log(studentlist);
 console.log(studentoldlist);
 console.log(studentnewlist);
 console.log(studentnewlist.join(" ,"));
 let newDatalist = studentname.concat(studentnewlist);
 console.log(newDatalist);
 //slice():Returns the portion of array.
 console.log(studentname.slice(1));
 console.log(studentname.slice(-2));
console.log(studentname.fill("Riya", 2))