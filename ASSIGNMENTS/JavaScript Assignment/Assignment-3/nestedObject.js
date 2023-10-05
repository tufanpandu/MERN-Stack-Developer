///=========== Nested Object ===================

const person = {
    name : "Tufan",
    age:24,
    address:{
        street: "Sundhi Sahi ,Balipeta",
        city: "Jeypure",
        state:"Odisha",
    },
}

function nestedObj(person){
    const {
        name,
        age,
        address :{
            street,
            city,
            state
        }
    } = person;
    return {"Name": name , "Street": street};
}
console.log(nestedObj(person));