///========== Min and Max Values finc =================

let arr = [5,8,6,4,5,1];

function minMax(arr){
    // Using spread operator
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    // Return result as object
    return { "Max": max , "Min" : min};
}

console.log(minMax(arr));