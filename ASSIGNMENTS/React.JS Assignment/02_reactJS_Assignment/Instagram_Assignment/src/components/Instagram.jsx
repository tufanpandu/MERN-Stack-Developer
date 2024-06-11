import './Instagram.css'
import {useState} from "react"
import Signup from "./Signup"
import Login from "./Login"


function Instagram(){
   
     const [isloged , setUser] = useState("login");

     
     let renderComponent = ()=>{
          if(isloged === "login"){
            return <Login setUser={setUser}/>
          }else if(isloged === "signup"){
            return <Signup setUser={setUser}/>
          }
     };

    return(
       <div className="w-[300px] h-[500px] border-2 border-salte-400 py-8">
           <img src="https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram-1-768x432.png" alt="igLogo"  className="w-[180px] mx-auto" />

            {
                renderComponent()
            }
       </div>
    )
}

export default Instagram;