//============== Build a feature for store inventory (USD to INR converter) =========================
const itemList = {
     sugar: 6,
     oil:15,
     kaju:30,
     onion:5,
     meggi:11,
     tomato:100
}
const items = Object.keys(itemList);
const values = Object.values(itemList); //Option for target
let exchangeRate = 80;
//USD to INR converter function
function usdToInr(inr){
  return inr * exchangeRate;
}
//const newObj = new Object();
const newObj = {};
const itemListInRupees = items.map((item) => {
    // here is key = assign values
     newObj[item] = `${usdToInr(itemList[item])} INR`;
})

console.log(newObj);

