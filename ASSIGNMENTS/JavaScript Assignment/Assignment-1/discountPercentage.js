//====== Calculate the percentage of the discount =============

const discountPercentage = (orgPrice , disPrice) =>{
    let save = orgPrice - disPrice ;
    let discount  = (save /orgPrice ) * 100;

    console.log(`Congratutalion ! You  Save ₹${save} on your order.`);
    console.log(`With discount of ${Math.floor(discount.toFixed(2))}% .`);
}

discountPercentage(200 , 174);
