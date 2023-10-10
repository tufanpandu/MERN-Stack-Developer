// Password Checker
//Approch -1
class User{
    constructor(userName,password){
        this.userName = userName;
        this.password = password;
    }

     getPassword(){
        return this.password.replace(/./g, '*') ;
    }

    
     setPassword(pw){
        //Use Ragular Expression for check condions
         let hasNumber = /\d/g.test(pw); // Check at last one number
         let hasUpperChar = /[A-Z]/.test(pw); // chech at last one Upper Character
        if(pw.length >= 8 && hasNumber && hasUpperChar ){
            this.password = pw;
        }else{
            console.log("Invalid Password");
        }
    }
}

//Approch -2
class UserOne {
    constructor(userName, password){
        this.userName = userName;
        this.password = password;
    }

     getPassword(){
        return this.password.replace(/./g , '*');
    }

     setPassword(pw){
        let hasNumber = false;
        let hasUpperChar = false;
  for(let i =0;i<pw.length;i++){ // Iterate on PW 
      let ch = pw.charAt(i);

      if(ch === ch.toUpperCase()){ // check Upper Case
        hasUpperChar = true;
      }else if(!isNaN(pw)){ // Check Number
        hasNumber = true;
      }
     
  }
  if(pw.length >= 8 && hasNumber && hasUpperChar){
    this.password = pw;
 }else{
   console.log("Password most be at least 8 character long contain at least one number and one Upper letter");
 }
    }
}

const result = new User("Tufan" ,"Tufan*1998" );
console.log(result.getPassword());
result.setPassword("pondu")

console.log("Approch 2 is starting");
const resultOne = new UserOne("Pondu" , "Tufan*1998");
console.log(resultOne.getPassword());
resultOne.setPassword("Tufan")