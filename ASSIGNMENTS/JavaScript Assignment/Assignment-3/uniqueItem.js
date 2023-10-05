/**
 * @param {arr} input for a function
 * @param {uniqueItem} function return a unique value store object .
 * //Set() data structure allwaya store unique value.
 * - do loop on each item using map and add the element into set()
 * @returns {uniqueValue} return Set();
 */

let arr = [2, 4, 7, 8, 3, 4, 6, 7, 5,3,10];

//Only Unique items are return
function uniqueItem(arr){
    //create a set
    const uniqueValue = new Set();
    arr.map((el) => {
        uniqueValue.add(el);
    })
    return uniqueValue; // return set
}

console.log(uniqueItem(arr));