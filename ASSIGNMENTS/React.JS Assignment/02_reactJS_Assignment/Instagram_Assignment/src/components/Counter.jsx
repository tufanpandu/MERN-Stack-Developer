import "./counter.css"
import {useState} from "react"

function Counter(){
    
    let [counter , setCounter] = useState(0)
     
    let increment = ()=>{
        setCounter((prevCount) => prevCount+1);
    }

    let decrement = ()=>{
        setCounter((prevCount) => (prevCount > 0 ?  prevCount -1 : prevCount))
    }

    return(
      <div className="w-80 h-48 bg-orange-300 my-auto mx-10 flex flex-col items-center justify-center">
          <h1 className="mb-3 text-4xl font-bold">{counter}</h1>
          <div className="flex  ">
            <button className="inc" onClick={increment}>Increment</button>
            <button className="dec" onClick={decrement }>Decrement</button>
          </div>
      </div>
    )
}

export default Counter;