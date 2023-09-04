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
    <input type='time' className="inputs" autoFocus value={title} placeholder="escribe la hora" onChange={e=>setTitle(e.target.value)} />
    <input className="inputs" value={description} type="textarea" placeholder="escribe tu tarea" onChange={e=>setDescription(e.target.value)} />
    <button>guardar tarea</button>
    </form>
  )
}

