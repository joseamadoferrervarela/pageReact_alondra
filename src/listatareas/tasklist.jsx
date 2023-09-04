
import { Taskcard } from "./taskcard.jsx";

 export function Tasklist(props) {



  if(props.tasks.length === 0){
  return <h1>no hay tareas aun</h1>
  }

  return (
    <div>
        
        {props.tasks.map(task => (
        <Taskcard  key={task.id} task={task} deleteTask={props.deleteTask}></Taskcard>
        ))}
        
    </div>
    
  )
}