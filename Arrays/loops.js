//The various loops ib Js are for loop ,while loop ,do-while loop,for each loop ,for of, for in
//for loop
for (i=0;i<=3;i++){
    console.log("Cat");
}
// while loop
let x =0;
while(x<3){
    console.log("Car");
    x++;
}
// do while
let y=0;
do{
    console.log("Dog")
    y++;
}
while(y<=4);
// To loop array
const cities =["Tokyo","london","Norway"]
for(let i=0;i<cities.length;i++){
    console.log(cities[i]);
}
// For loop variation in Js 
// 1.TO work easily with array we use for each loop
cities.forEach(function (v,i){
    console.log(v)
});

//2. for of loop -->Used in array or string
/*syntax:
for(elements of iterable){
    //body of for...of
}
The for of loop in js allows you to iterate over iterable objects (arrays, sets , maps , strings,etc)
Here:
iterable - an iterable object 
Elements - items in iterable
*/
const studentlist = ["Samay","Rakesh"]
for (let student of studentlist){
    console.log(student);
}
// for of here gives values in arrays

let channel= "Discord"
for (let c of channel){
    console.log(c)
}
//3. for in loop -> in gives index value in Array and key value in object
/* syntax: for (variable in object){
    code to be executed for each property of object
}*/
for ( let city in cities ){
    console.log(city);
}
// o/p : 0 1 2

const stds ={
    name :"ABC",
    address : "ktm"
};
for ( let s in stds){
    console.log(s);
}
//o/p: keys in object