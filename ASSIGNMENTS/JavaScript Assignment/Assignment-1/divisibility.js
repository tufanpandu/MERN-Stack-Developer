//===== Check divisiblity by 3 but not by 2 ===============

function divisiblity(arr){
    let result = "";
    for(let i =0 ;i< arr.length;i++){
      //check condition
      //divisible by 3 not by 2 condition .
      if(arr[i] % 3 === 0 && arr[i] % 2 !== 0){
        result += arr[i] + " ";
        continue;
      }
    }
    console.log(result + " ");
}

divisiblity([9,6,15,12,18,20,30,5,21])