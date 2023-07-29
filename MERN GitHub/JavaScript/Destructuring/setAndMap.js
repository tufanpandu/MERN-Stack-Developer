////// Map 
//Map is a collection key data items. Just like Object but 
// Map allows any value as key

// create map
const newMap = new Map();
//add value 
newMap.set("age" , 25) // String key
newMap.set(1 , "Tufan") // Integer key
newMap.set(true, "Print value") // boolean key

console.log(newMap);

// get the value frome map using key

console.log(newMap.get(true))
console.log(newMap.get(1))

// map size -> Size is not a function
console.log(newMap.size)

// map key delete
console.log(newMap.delete("age"));

// map clear
console.log(newMap.clear());





//+++++++++++++++++++++++++++++++++++   Set  +++++++++++++++++++++++++++++++++++++++++


// Set is specal type of collection of value without key .
// Set store unique value

//creat set
const newSet = new Set();

// add value into set
newSet.add(1)
newSet.add(2)
newSet.add(3)
newSet.add(4)
newSet.add(5)
newSet.add(3)
console.log(newSet)
// check set has 5 or not
console.log(newSet.has(5)) // true
console.log(newSet.has(6)) // false

// size of set
console.log(newSet.size)

// delete and clear
newSet.delete()
newSet.clear()
