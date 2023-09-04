import  "./calendartask.css";
import { Taskform } from "./taskform.jsx";
import { Tasklist } from "./tasklist.jsx";
import { data } from "./tasks.js";
import { useState,useEffect} from 'react';
import { Taskmain } from "./taskmain";



export function Calendartask(props) {

  const [tasks, setTasks] = useState([])

  useEffect(() => {setTasks(data)},[])

  const createTask = (taskTitle,taskDescription) =>{
  setTasks([...tasks, 
    {title:taskTitle,
     id: tasks.length,
     description:taskDescription
    }])
  }

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  return (
    <div className="calendario">
      
      <Taskmain deleteTarjeta={props.deleteTarjeta} newfecha={props.newfecha}></Taskmain>
      <Taskform createTask={createTask}></Taskform>
      <Tasklist tasks={tasks} deleteTask={deleteTask}></Tasklist>
    </div>
    
  )
}

