/*
A Map holds key-value pairs where the keys can be any datatype.
A Map remembers the original insertion order of the keys.
A Map has a property that represents the size of the map.*/
/*can create a JavaScript Map by:

-->Passing an Array to new Map()
-->Create a Map and use Map.set()
*/
//1.new Map()	Creates a new Map object
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  //2.get():Gets the value for a key in a Map
  console.log(fruits.get("apples"))
  
  //3.clear()	:Removes all the elements from a Map
  console.log(fruits.clear)
//4.delete()	:Removes a Map element specified by a key
console.log(fruits.delete("apples"))
//5.The size property returns the number of elements in a Map:
console.log(fruits.size)

