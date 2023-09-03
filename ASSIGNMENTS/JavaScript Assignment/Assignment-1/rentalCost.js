//====== Car Rental Cost ===
 //Money format object
  //INTL
 const moneyFormat =  new Intl.NumberFormat("en-IN",{
    style : "currency",
    currency : "INR"
 });

//Approch -1 
function  rentalCost( carType , days){
      let totalCost = 0;
    //Check Car type condition
    if( carType === "Economy"){
        totalCost = days * 4000;
    }else if(carType === "Midsize"){
        totalCost = days * 10000;
    }else if( carType === "Luxury"){
        totalCost = days * 20000;
    }else{
        return "Sorry.. This Car type is not found ."
    }
  return moneyFormat.format(totalCost);
}

console.log(rentalCost("Midsize" , 18));