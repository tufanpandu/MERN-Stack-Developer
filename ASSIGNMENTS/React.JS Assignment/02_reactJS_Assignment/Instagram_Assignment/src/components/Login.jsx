import "./Instagram.css"

function Login({setUser}){

     function msg(){
      alert("You'r sucessfully Logedin.")
     }
    return(
        <>
         <div>
            <input className="inputBox" type="text" name="username" placeholder="Phone number,username,or email" required/> <br/>
            <input className="inputBox" type="password" name="password" placeholder="Password" required />
          </div>
          <button id="signin" onClick={()=> msg()} >Sign In</button>
          <p className="mt-6">Don&apos;t have account ? 
            <span className="text-sky-500 cursor-pointer ml-1" onClick={()=>setUser("signup")}> 
              Sign up</span>
         </p>
        </>
    )
}

export default Login;