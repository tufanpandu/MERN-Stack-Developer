// HOF (Higher Order Function)

const powerTwo = (n) => {
    return n ** 2;
}
// Take function as parmeter. and return a fuction is called Higher Order Functions.
function powerCube(powerTwo ,  n){
    return powerTwo(n) * n;
}

console.log(powerCube(powerTwo , 3));



// Example -1
function say(){
    return () =>{
       console.log("Hello , Tufan !");
    }
}
let store = say();
console.log(store);// It's return anonymous inside the function
store();

//Exapmple -2

const higherOrder = (m) =>{
    const oneFun = (n) => {
        const twoFun = (p) =>{
            return m + n + p;
        }
     return twoFun;
    }
    return oneFun;
}

console.log(higherOrder(2)(5)(10));

// Example -2 

const myNum = [2, 4, 8,6];
const sumArr = (myNums) =>{

    let total =0;
    myNums.forEach((element) =>{
        total += element;
    });
 return total;
}

const result = sumArr(myNum);
// you can directly call the function console.log(sumArr(myNum))
console.log(result);


// setInterval

function intervalFun(){
    console.log("Hello , Tufan Pandu");
}
// This set interval function print the value every set time interval.
//setInterval(intervalFun, 2000);  

setTimeout(intervalFun, 2000); // This function print the value after some set of time end.



