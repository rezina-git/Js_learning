/* Datatypes are the types of values that are assigned to variable.There are 8  datatypes in Javacsript they are: */
//1.string: Can be made by two ways:
//i.simply by giving  value
let a = "20"
console.log(typeof a);
//ii>By using wrapper object: DIFF IS THAT IT HAS MORE FUNCTIONALITY AND Feature than normal string type
let b = new String("Rejina");
//console.log(typeof b);
console.log(b.concat(" Budhathoki "))

//2. Number
/* Same like using normal number but if it is written inside doubke or single quotes
it is regarded as string.Here also we can use wrapper object to use more features.
But it has limitation absolute value equal to 2^53 or greater are too large to be reperesented accurately
as integer.*/
let r = 1.2; // can be given direct value w/o assiginig type
console.log(r);

//3. To resolve the limitation of number **Bigint** has been added
let s = BigInt(123456789123456789) // Don't use new before bigint
console.log(s);
//console.log(s+1);
console.log(s+1n);
// bigint operation can be done only with bigint not number and it maintains precison.


//4. Boolean * Returns true or false value
 let isvaliduser = false;
 let x = new Boolean(true);

 console.log(typeof isvaliduser)
 console.log(typeof x)
 
//5.  Undefined --. variables whose values are not defined.

//6. Null --> To give empty value Null is used.

//7. Symbol --> By using symbol unique identifier can be made.Mainly used in object datatypes.

//8. Object --> From this datatype variables can be put on key value pairs.
let student = {
    name : 'RAni',
    age :  22,
}
console.log(student)