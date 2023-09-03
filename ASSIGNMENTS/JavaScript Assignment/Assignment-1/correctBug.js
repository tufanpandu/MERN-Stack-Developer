//===== Correct a bug ==========
function correctBug(arr){
    let correctCart = [];
    //forEach()loop
     arr.forEach((item) =>{
        correctCart.push(item * 2);
     })

    //for loop
    // for( let i =0 ;i< arr.length ;i++){
    //     correctCart[i] = arr[i] * 2 ;
    // }


    return correctCart;
}

let arr = [2 , 5, 10 ,6, 25 , 50];
console.log(correctBug(arr));
//correctBug(arr);