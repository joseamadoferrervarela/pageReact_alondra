import "./taskcard.css";
export function Taskcard(props) {


  return (
    <>
        <div className="conten">
        <div  onClick={e=> e.target.parentElement.classList.toggle("holamundofg")} className=" form-control tarea">
        <p className="texto">{props.task.title}</p>
        <p className="texto">{props.task.description}</p>
        </div>
        <button className=" form-control texto" onClick={()=>props.deleteTask(props.task.id)}>eliminar tarea</button>
        </div>
    </>
  )
  }

