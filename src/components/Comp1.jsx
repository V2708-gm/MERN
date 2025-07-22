import React from 'react'
import Comp2 from './Comp2'
const Comp1=()=>{
    const user={name:"John",age:30}
    return(
        <>
        <h2>Prop Drilling</h2>
        <Comp2 user={user} />
        </>
    )
}
export default Comp1