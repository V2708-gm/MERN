import React from "react";
import { useState, useEffect } from "react";
const GetData=()=>{
    const [data,setData]=useState([])
    useEffect(()=>{
        fetchDataFromServer()
    },[])
    const fetchDataFromServer=async()=>{
        try{
            const response=await fetch('https://jsonplaceholder.typicode.com/todos/1')
            if(response.ok)
             setData(await response.json())
        }
        catch (error)
        {
            console.log("Error fetching data",error)
        }
    }
    return (
        <>
        <h1>Fetched Todo</h1>
    <pre>{JSON.stringify(data, null, 2)}</pre>
        
        </>
    )
}
export default GetData