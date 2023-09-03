//======== Build a banking application =============

//Number formormating
const formatMoney = new Intl.NumberFormat("en-IN",{
    style : "currency",
    currency : "INR"
});
const userDetails = {
    name :"Tufan Chandra Pandu",
    totalBalance : 0,
    balance : function update(deposite , withdrawal){
           if(deposite){
            this.totalBalance += deposite;
        
           }else{
            this.totalBalance -= withdrawal;
           
           }
          return this.totalBalance;
        }
}

//call object function

userDetails.balance(5000); // Deposite 5000/-
userDetails.balance(200); // deposite 200 /-
userDetails.balance("", 600); //Withdrawal 700 /-
userDetails.balance(500)

console.log(`User : ${userDetails.name} , Balance : ${formatMoney.format(userDetails.totalBalance)}`);