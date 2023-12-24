const user = require("../model/userModel.js");

// Home route
exports.home = (req, res)=>{
    res.send("Your request is accepted Tufan");
}

//Create User

exports.createUser = async (req,res)=>{
     try{

        const {name , age , username} = req.body;
          if(!name || !age || !username){
            throw new Error("Name , age and username is required.");
          }

         const userExist = await user.findOne({username});
         if(userExist){
            throw new Error("User name is alrady present.");
         }
        const myUser = await user.create({
            name,
            age,
            username
        })

        res.status(200).json({
            success:true,
            message: "User create successfully.",
            myUser
        })

     }catch(error){
          console.log(error);
          res.status(404).json({
            success:false,
            message: error.massage,
          })
     }
}


//Receives user

exports.getUsers = async (req, res)=>{
   try {
      
      const getUsers = await user.find({});
       if(getUsers.length == null){
          throw new Error("User is Empty")
       }

       res.status(200).json({
        success:true,
        message:"Successfully you find the user.",
        getUsers
       })
    
   } catch (error) {
        res.status(404).json({
            success:false,
            message:error.message
        })
   }
}

//Update or edit users

exports.editUser = async (req, res)=>{
    try{
         const editUser = await user.findByIdAndUpdate(req.params.id, req.body);
         res.status(200).json({
            success:true,
            message:"User is updated successfully."
         })

    }catch(error){
      res.status(404).json({
        success:false,
        message:error.message
      })
    }
}



//Delete user 

//NOTE:- We take data from URL or from body

exports.deleteUser = async (req,res)=>{
       try {
          //First we have to get id from url
           const userId = req.params.id;
            const deleteUser = await user.findByIdAndDelete(userId);
                res.status(200).json({
                    success:true,
                    message:"User deleted successfully."
                })
       } catch (error) {
          res.status(404).json({
            success:false,
            message: error.message
          })
        
       }
}