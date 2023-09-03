// ===== Bill Splitter ===============

function billSplitter(dishCost , people){
       let totalBill = 0;
       // Calculate total dish cost which is equal to total bill .
    dishCost.forEach(function(cost){
         totalBill += cost
    })
   //Calculate each persion how much paid
   let eachPersionPaid = totalBill / people;

   // return object
   return { "Total Bill" : totalBill ,
             "Bill Paid by each Person " : eachPersionPaid};
}

let dishCost = [20 , 125, 80, 65 , 250];

console.log(billSplitter(dishCost, 10));
