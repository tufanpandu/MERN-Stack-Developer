const userModel = require("../model/userModel.js"); //importin user model


//Controlles is nothing but a bunch of function

exports.users = async (req, res) =>{
      try{
        // destructureing the relevent data from req body.
          const {name , email , password} = req.body;
          //find the user data from user model.
          const user =await userModel.find({});

          if(user.length == null){ //if user length is null 
            throw new Error("User is not Exsits.")
          }

          res.status(202).json({
             success:true,
             message:"You get User details successfully.",
             user
          })
      }catch(error){
         res.status(404).json({
            success:false,
            message: error.message
         })
      }
}


exports.register = async (req, res) =>{
    try {

        const {name , email , password } = req.body;
        if(!name || !email || !password){
         throw new Error("All input fields are required")
        }
        const userExist = await userModel.findOne({email});
        if(userExist){
            throw new Error("User is already Register.")
        }
      //  Create user 
        const userCreate = await userModel.create({
            name,
            email,
            password
        })
         

        res.status(200).json({
             success:true,
             message:"User Registration Successfull"
        })
        
    } catch (error) {
        res.status(404).json({
            success:false,
            message:error.message
        })
    }
}

exports.login = async (req, res)=>{
    try {
        const {email, password} = req.body;

        const  userExist =await userModel.findOne({email});

        if(userExist){// If user is exists
                 //If user exist then check password
                 if(userExist.password == password){
                     res.status(200).json({
                         success:true,
                         message:"User Login Successfully.",
                 })
                 }else{ // If password is not matched
                   res.status(401).send({"msg" : "Password is wrong"})
                 }
        }else{ //If users is not exits
            res.status(404).send({"msg":"No account associated with this email."});
            
        }
        
    } catch (error) {
        res.status(404).json({
            success:false,
            message: error.message
        })
    }
}
