import React  from "react";
import {useState,useEffect} from React
import { getTodos,addTodo,UpdateTodo,deleteTodo } from "./service";
const TodoApp=()=>{
    const [todos,setTodos]=useState([])
    const [task,setTask]=useState("")
    const [editing,setEditing]=useState(null)
    useEffect(()=>
    {
        getTodo();

    }),[todos]
    const getTodo=async()=>{
        const response= await getTodos
    }
    const handleDelete=async()=>{
        const response= await deleteTodo(id)
        if(response.status===200)
        {
            alert("Todo deleted successfully")
            getTodo
        }
    }
    return(
        <>
        <h2>The Todo List is</h2>
        <ul>
        {
            todos.map((todo,index)=>(
                <li key={index}>{todo}
                <button onClick={()=>{handleEdit(todo)}}>Edit</button>
                <button onClick={()=>{handleDelete(todo.id)}}>Delete</button>
                </li>
            )
            )
        }
        </ul>
        </>
    )
}