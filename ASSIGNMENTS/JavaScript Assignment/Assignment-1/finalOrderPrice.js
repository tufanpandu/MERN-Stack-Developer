
const finalOrderPrice = (cart) => {
      let totalPrice = 0;
      cart.forEach((item)=>{
        // Multiply itme price and quantity
        let  total = item.unitPrice * item.quantity;
        totalPrice += total;
      })

      return totalPrice;
}

let cart = [
    {unitPrice : 20, quantity : 7},
    {unitPrice: 35, quantity: 9},
    {unitPrice: 110, quantity: 6},
    {unitPrice: 150, quantity :20}
         ];
let output = finalOrderPrice(cart);
 // call function
 console.log(`Final Order Price is  ${output}`);            