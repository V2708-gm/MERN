import React, { useEffect, useState } from "react";
import { data } from "react-router-dom";

const Crud=()=>{
    const[data,setData]=useState([])
    const[message,setMessage]=useState("")
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response=>response.json())
        .then(data=>setData(data))
        console.log(data)
    },[])
    const sendData=()=>{
        fetch('https://jsonplaceholder.typicode.com/posts',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({message:message})
        }).then(response=>response.json())
          .then(data=>console.log(data))
    }
    return(
        <>
        {/* <input type="text" value={message} onChange={(e)=>{setMessage}} */}
        <h2>Crud Operation</h2>
        
        </>
    )
}
export default Crud