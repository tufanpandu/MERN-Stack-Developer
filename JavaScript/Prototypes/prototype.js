let myHero =["Tufan", "Imran"]
console.log(myHero)

// Ex -1
let myName = "TufanPnadu       "
console.log(myName.length); // find length
console.log(myName.length); // fint length with space.
console.log(myName.trim().length); // get true length.

// Ex -2

let superHero = {
    thor:"Hamer",
    spiderman : "Sling",

    spidermanPower: function(){
        console.log(`Spider man power is  ${this.spiderman} .`);
    }
}

console.log(superHero.spidermanPower());


/// Give Function acesses to all the data type .

Object.prototype.tufan = function(){
    console.log("Tufan method is give acesses to all the data type.")
}

//myHero array variable  don't have tufan method . but we can access
console.log((myHero.tufan()));

console.log(superHero.tufan());


//// ======================= Inheritance =========================================

const classroom = {
      noRoom : 25 ,
      isOffice : true
}

const teacher ={
     english : 5 ,
     isChemesty : true ,
     // first method
    // __proto__ : classroom // Inhouse proto inject.
}
// Secod mehtod
//teacher.__proto__ = classroom; //Outside proto inject.
// Third or Morder mehod syntax 
Object.setPrototypeOf(teacher ,classroom)

console.log(teacher.noRoom); // 1st method
console.log( teacher.isOffice); // 2nd method


///=================== trueLength() mehtod how to create ============================================

String.prototype.trueLength = function(){
    return this.trim().length;
}
console.log(myName.length)  // 17
console.log(myName.trueLength()) //10






