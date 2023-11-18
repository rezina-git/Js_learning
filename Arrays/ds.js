let planets = ["Sun","Moon","Mercury","Venus","Jupitar"]
// let planet1 = planets[0];
// let planet2 = planets[1];
//console.log(planet1,planet2) // o/p: Sun MOOn
let [planet1, planet2,planet3,planet4="Venus",...rest] = planets;
console.log(planet1,planet3);// o/p:Sun Mercury
console.log(planet4);// o/p:undefined
console.log(rest);
// Spread operators can also be used to Merge values
let shadowPlanets = ["Rahu","Ketu"]
let allplanets =["Uranus",...planets,...shadowPlanets,"saturn"];
//OR let allplanets = planets.concat(shadowplanets) In array;
console.log(allplanets);

//  Using in Object

let student ={
    name : "Ramesh",
    age :10,
    address :{
        name : "KTM",
    Phone_NO :"9841842061",
    lat : 1 ,
    log : 2,
}};
// let studentid = student["name"]
// let studentage = student["age"]
// console.log(studentid);
// console.log(studentage);
const{ name : studentidentity ,age,...otherdetails}= student;
console.log(studentidentity);
console.log(age);
console.log(otherdetails);