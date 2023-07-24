let arr = [2 ,5, 6, 8, 1];
// 1️⃣forEach()
//It's an a loop it's iterate over allthe elements of array.
//Its not return new array
arr.forEach(function(element , index  ,arr){console.log(element , index ,arr)});

//using Arrow function
arr.forEach((element, index , arr) => console.log("forEach with Arrow fun" + element, index , arr))

//Create Text-transform method
const myName = ["Tufan", "Chintu","Imran","Santu","Pintu"];
myName.forEach((element)=> console.log(element.toUpperCase()));

// 2️⃣Map()
//Map method return new array
arr.map(function(element , index , arr){
    console.log("Map()" + element, index , arr);
})
//using Arrow function
arr.map((element, index , arr) => console.log("map with Arrow fun" + element, index , arr))
//Find the elements with endWith

myName.map((element)=>{if(element.endsWith("u" )){console.log(element)}})

//3️⃣ fillter()

// What i did in above myName array using map() method  in that array using fillter method and write some algorithm inside the filter we can filter the element based on condidtion 

// filster can accpet upto three parameters.

const endWith =myName.filter((el)=>{
    return el.endsWith("n");
});

console.log(endWith);


/// 4️⃣ reduce()

//reduce method take two parameters.

// In reduce method we have to initialize the prev .

let age = [ 24 , 20 ,15, 10];

const sumOfAge = age.reduce((prev , next) => prev+next , 0);

console.log(sumOfAge);


/// 5️⃣ every()
/// Check all value is numbers

const itmes = [2, 5 , "2", 10];

const checkType = itmes.every((el) => typeof el === "number");

console.log(checkType);

//// 6️⃣ find()
// find method iterate over array and return first staisfiy condition value .

const findAbove = itmes.find((el) => el > 2);

console.log(findAbove);

////7️⃣ findIndex
// 
function findIdx(itme){
   return itme === 5;
}
const idxNum = itmes.findIndex(findIdx);

console.log(idxNum);

/// 8️⃣ some

/// 9️⃣ sort