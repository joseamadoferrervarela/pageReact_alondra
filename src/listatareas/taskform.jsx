import { useState } from "react";
import "./taskform.css";

export function Taskform(props) { 
   const [title, setTitle] = useState("")
   const [description, setDescription] = useState("")


   const handleSubmit = (e) =>{
    e.preventDefault();
    const newTask=title
    const newDescription=description
    props.createTask(newTask,newDescription)
    setTitle("")
    setDescription("")
   }
   
   return(
    <form  className="forms" onSubmit={handleSubmit}>
    <input type='time' className="form-control inputs" autoFocus value={title} placeholder="escribe la hora" onChange={e=>setTitle(e.target.value)} />
    <input className="form-control inputs" value={description} type="textarea" placeholder="escribe tu tarea" onChange={e=>setDescription(e.target.value)} />
    <button className=" form-control inputs">guardar tarea</button>
    </form>
  )
}

