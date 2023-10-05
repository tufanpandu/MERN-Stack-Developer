// ========== Access Random Element =================
let arr = [5,8,6,4,3,10];

function accessNum(arr){
    let  [a,b,...other] = arr;
    return [a,b,other[other.length-1]];
}

console.log(accessNum(arr));