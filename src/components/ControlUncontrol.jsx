import React from "react";
import { useState,useRef } from "react";
const ControlUncontrol=()=> {
    const [inputValue,setInputvalue]=useState('')
    const inputRef=useRef()
    const handleUncontrolledInut=()=>{
        alert(`${inputRef.current.value}`);
    }
    return(
        <>
        <h2>Controlled Component</h2>
        <h2>The value of InputRef is:{inputValue}</h2>
        <input type="text" value={inputValue} onChange={(f)=>setInputvalue(f.target.value)}/>
        <h2>UnControlled Component</h2>
        <input ref={inputRef} />
        <button onClick={handleUncontrolledInut}>Uncontrolled Input</button>
        </>
    )
}
export default ControlUncontrol