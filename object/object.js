 /*let book ={
    name : "Radha",
    author : "Krishna Dharabasi",
 }
 console.log(book)*/

 //Function can also be made inside object.
 let book ={
    name : "Radha",
    author : "Krishna Dharabasi",
    def : "def",
    description : function(){
        return "Book on overcomming self";
    },
 };
 console.log(book.description());

 // Wrapper object
 // let a = 12;
 let b = new Object (
    {
        name : "ABC",
    author : "Krishna Dharabasi",
    }
 );
 //console.log(b.) garda Dheraii features haru dekhauxa cause of wrapper object.

 //Modify
 // supoose to change the name of author.
 book.name= "Radha_Krishna";
 console.log(book.name);

 // New property addition 
 book.address = "kthmandu";
 book.others = function(){
    return others;
 };
 console.log(book);

 // To delete property
 delete book.def;

 // Nested object :
 let noble ={
    name : "Radha",
    author : "Krishna Dharabasi",
    def : "def",
    address : {
        city : "Pokhara"
    },
 };
 console.log(book.address.city);

 // About JS Object

 console.log(Object.entries(book));// Gives values in array form

 // OBject.assign to copy the all keys and values pairs to new object we use assign

 let c = Object.assign({},book);
 console.log(c);

 //JS Freeze
"Use strict"
 const computer = Object.freeze({
   name : "Engineering licence",
   author : "Er.Ganesh Poudel"
 });
 console.log(computer);

 computer.name = "Civil Engineering";
 