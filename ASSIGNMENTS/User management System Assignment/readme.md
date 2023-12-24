# User Managment Backend with Express and mongoDB

### Objective :

Design and devlope a user managment backend system using express.js and mongoDB, allowing user to create, login account.

> We have multiple file and folder to create this.

- First we need to setup the environment installing `npm packages` . like express , mongoose , .env etc

## server.js file

- first we create a `PORT` which is first check the port is avilable inside `.env` file or not if avilable insede the port then it take it or take which we defined.
- Now we require `app.js` file which is we create for separate all the dependecies or module inside the `app.js` file.
- At last we `listen` the `app.js` for getting all the instance inside the `server.js` file.

```javascript
//we create a PORT first
const PORT = process.env.PORT || 3000;
const app = require("./app.js");

app.listen(PORT, () => {
  console.log(`Your server is running at ${PORT} .`);
});
```

## app.js file

- Inside the `app.js` file we import bunch of modules.
- like `.dotenv`, `express`, `connectDB`,`route`etc
- `.dotenv` : This is for loading environmental variables from the running process.
- `express`: Express gives all the functions
- Now we require conncetDB and route modules .

- After importing all the modules then we write middlewears .
- At last after writing all the middlewear we call the `connectDB()` method.
- Finally exports the app variable where we have express.

```javascript
require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./config/db.js");
const route = require("./route/userRoute.js");

//Write middleweare

app.use(express.json()); // It's parse the incomeing requests into the JSON format.
app.use(express.urlencoded({ extended: true })); // It's parse the incomeing requests into encoded URL
app.use("/", route); //Any request to this route path can be handeled.

//call connection db
connectDB(); //Here we call the function to connect database.

module.exports = app;
```

## Create `route` folder inside create `userRoute.js` files.

- First again import the express.
- Now using `Destructing` with require controller file we get the all controllers .
- Using ` express.Router()` function we create a router.
- This route is used for createing `Endpoints`
- We cereate some endpoints with useing `get`, `post` method.
- Finally we exports the route .

```javascript
const express = require("express");
// require controller using we get all function or controllers
const { users, register, login } = require("../controller/userController.js");

//Create Router
const route = express.Router();

//End points
route.get("/users", users);
route.post("/register", register);
route.post("/login", login);

module.exports = route;
```

## Create `Controller` folder inside create `userController.js` files

- First we import the `userModel` where we decide the schema of our model.
- As you known controllers is nothing but an `function`.
- Now create controllers for our `endpoints`
- like `user`, `registration` and `login`.
- Here we use javascript `async await` and `try catch` concepts.
- Finally exports all the function .

```javascript
const userModel = require("../model/userModel.js");

//Controlles is nothing but a bunch of function

exports.users = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await userModel.find({});
    if (user.length == null) {
      throw new Error("User is not Exsits.");
    }

    res.status(202).json({
      success: true,
      message: "User is Successfully show",
      user,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      throw new Error("All input fields are required");
    }
    const userExist = await userModel.findOne({ email });
    if (userExist) {
      throw new Error("User is already Register.");
    }

    const userCreate = await userModel.create({
      name,
      email,
      password,
    });

    res.status(200).json({
      success: true,
      message: "User Registration Successfull",
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await userModel.findOne({ email });

    if (userExist) {
      //If user exist then check password
      if (userExist.password == password) {
        res.status(200).json({
          success: true,
          message: "User Login Successfully.",
        });
      } else {
        res.status(401).send({ msg: "Password is wrong" });
      }
    } else {
      res.status(404).send({ msg: "No account associated with this email." });
    }
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};
```

## Create `Model` folder inside create `userModel.js` files

- First require the `mongoose` into the `userModel.js` file.
- Second now define mongoose model for user.
- then finally exports the `userModel` .

```javascript
const mongoose = require("mongoose");

//Define the mongoose model for user.
const userModel = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Name is require"],
    trim: true, // It's trim the extra whitespaces in input.
  },
  email: {
    type: String,
    require: [true, "Email is require."],
  },
  password: {
    type: String,
    require: [true, "Password is require"],
  },
});

module.exports = mongoose.model("User", userModel);
```

## Create `Config` folder inside create `db.js` files

- First importing mongoose library
- Using `async` function we connect the database.

```Javascript

const mongoose = require("mongoose");

//Create a connection with mongoDB
const connectDB = async()=>{
 // connect mongoDB  using environmental variable.
    mongoose.connect(process.env.MONGODB_URI)
    .then((conn)=>{ // after complete the  connection.
        console.log(`Your database is connection successfull with ${conn.connection.host}`);
    }).catch((error)=>{
        console.log("ERROR", error);
        process.exit(1);
    })
}
//export the connectDB function for forther  use.
module.exports = connectDB;
```
