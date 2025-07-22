import React,{createContext,useState} from "react";

const CounterContext=createContext()
export const CounterProvider=({children})=>{
    const[count,setCount]=useState(0)
    const IncrementCount=()=>{setCount(count+1)}
    const DecrementCount=()=>{setCount(count-1)}
    const ResetCount=()=>{setCount(0)}
    return(
        <>
        <CounterContext.Provider value={{count,IncrementCount,DecrementCount,ResetCount}}>{children}</CounterContext.Provider>
        </>
    )
}
export default CounterContext