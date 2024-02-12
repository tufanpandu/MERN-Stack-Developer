///============= Promise ===================
/**
 * ✅- promise is a good way to handle asynchronous operations.
 * ✅- It's have 3 state  (a)Pending , (b)Fullfiled , (c) Rejected
 * ✅-For createing Promise we use Promise() constructor.
 * ✅- Promise() constructor take function as argument and This function also take 2 function resolve() and reject().
 * ✅- .then() method is used for resoleve the promise.
 * ✅- .catch() method is use for reject the promise.
 */

// Basic Promise Object

// Ex- 1
const promise = new Promise(function(resolve, reject){
            let a = "Tufan"
            let b = "Tuifan"
            if(a === b){
                resolve();
            }else{
                reject();
            }
        });
        
 promise.then(function(){
    console.log("String is matched")
}).catch(function(){
    console.log("String is not Equal")
}).finally(function(){
    console.log("Print every operation")
})

// Ex -2

const promiseOne = new Promise(function(resolve , reject){
    setTimeout(function(){
      let num = Math.random();
      if(num > 0.8){
        resolve(num)
       }else{
        reject(num)
       }
  }, 2000) 
})

promiseOne.then(function(num){
      console.log("We get Desire Value " , num)
}).catch(function(error){
    console.log("Value is very low : " + error)
})


//imp-👉  resolve and reject method have takes only one parameter for passing multiple parameter we have to bind all the paremeter in object or array. 


let tufanPromises = new Promise((resolve,reject)=>{
    
    let des = false;
    
    if(des){
        resolve(["Resolve the problem", des]);  // Bind parameter in array
    }else{
        reject({issue:"Reject the problem", msg: des}); // combaine parameter in object
    }
});


tufanPromises.then((msg)=>{
     console.log("Your problem is : " , msg[0]);
     console.log("Your decision is : " , msg[1]);
}).catch((msg, d)=>{
     console.log("Your problem is : " , msg.issue);
     console.log("Your decision is : " , msg.msg);
})
