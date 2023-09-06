import "./app2.css";
import { Calendartask } from "./calendartask.jsx";
import { useState } from "react";

export function App2() {

    const [fecha, setFecha] = useState([])
    const [tarjetas, setTarjetas] = useState([{mensaje :"2023-08-01", id: 0}])
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        setTarjetas([...tarjetas, {mensaje:fecha, id:tarjetas.length}])
       }

    const deleteTarjeta = (tarjetaId) => {
    setTarjetas(tarjetas.filter(tarjeta => tarjeta.id !== tarjetaId))
    }
  
    

      
  
  return (
        <div>
        <div className="header"> 
        <h1 >lista de tareas para el dia de la semana que tu quieras</h1>
        <form onSubmit={handleSubmit}>
            <input className="buy" type="date"  onChange={e=>setFecha(e.target.value)}/>
            <button>introducir tarjeta</button>
        </form>
        </div>

        <div className="cajaflexible">
        {tarjetas.map(tarjeta => (
        <Calendartask deleteTarjeta={deleteTarjeta} newfecha={tarjeta} ></Calendartask>
        ))}
        </div>

    </div>
  )
}

