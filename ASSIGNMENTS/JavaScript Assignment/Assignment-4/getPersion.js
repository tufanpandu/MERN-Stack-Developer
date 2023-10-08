// Building Robust function in javascript.


function getPersion(persion){
    try{  
        // Check persion is object or not and persion have age and name property or not.
        if(typeof persion !== "object" || !persion.age||!persion.name){
            throw new Error("Invalid Parmeter type.");
        }
        return `name : ${persion.name} , age ${persion.age}`; // Return answer
        
    }catch(error){
        return error.message;
    }
    
}
console.log(getPersion(persion));
console.log(getPersion({name:"Pushpanjali"}));
console.log(getPersion(["name", "Kailash"]));