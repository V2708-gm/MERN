import React from "react";
const EventHandler = () => {

    const submitData=()=>{

        alert("The Named Event Handler is called");
    }
    const greet=(name)=>{
        alert("the name is "+name)
    }
    return(
    <>
    <h2>Named Event Handler</h2>
    <button OnClick={submitData}>SubmitNameEventHandler</button>
    <h2>Inline Event Handler</h2>
    <button onClick={()=>alert("This is event from inline")}> Inline Event</button>
    <h2>Passing arguments in function</h2>
    <button onClick={()=>greet("Hello")}>click me</button>
    </>


    )
}
export default EventHandler