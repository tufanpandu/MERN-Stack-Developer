const costomerCart = [2 ,4, 1 ,4,6 , 8, 2, 4,8,6] // havae duplicat items

///================= Example -1 ====================
function removeDuplicat(costomerCart){
    let newCart = [] // initilze new cart array

    // here we can use for each loop 
    costomerCart.forEach((item)=>{
        if(!newCart.includes(costomerCart[item])){
           newCart.push(costomerCart[item]);
        }
    })

  return newCart;
}

console.log(removeDuplicat(costomerCart));