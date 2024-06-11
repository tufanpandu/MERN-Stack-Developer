import "./Instagram.css"


function Signup({setUser}){
    return(
       <>
        <div>
            <input className="inputBox" type="text" name="phoneNumber" placeholder="Phone number or email" /> <br/>
            <input className="inputBox" type="text" name="fullname" placeholder="Full Name" /> <br/>
            <input className="inputBox" type="text" name="username" placeholder="Full Name" /> <br/>
            <input className="inputBox" type="password" name="password" placeholder="Password" />
          </div>
          <button id="signup" onClick={()=> setUser("login")}>Sign Up</button>
          <p className="mt-6"> have an account ? 
            <span className="text-sky-500 cursor-pointer ml-1" onClick={()=> setUser("login")}> 
                Log in</span>
         </p>
       </>
    )
}

export default Signup;