import React from "react";
import { useState } from "react";

const Test=()=>{
    const [v,setV]=useState("")
    const [count,setCount]=useState(0)
    const [name,setName]=useState("")
    function submitData(e) {
  console.log(e.target.value);
  console.log("The name is:",name);
}
    return(
        <>
        <h2>The Name is:{v}</h2>
        <h2> The count value is:{count}</h2>
        <h3>The value of Name is:{name}</h3>
        <input type="text"  onChange={(e) =>setName(e.target.value)}/>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        <button onClick={()=>setCount(0)}>Reset</button>
        </>
    )
}
export default Test