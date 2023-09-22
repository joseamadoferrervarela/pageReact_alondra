import "./app2.css";
import { Calendartask } from "./calendartask.jsx";
import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

export function App2() {

    const [fecha, setFecha] = useState([])
    const [color, setColor] = useState("")
    const [tarjetas, setTarjetas] = useState([{mensaje :"2023-08-01", id: 0, colorful:"3a4e7663255112d8bf273432cd3645aa.jpg"}])
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        setTarjetas([...tarjetas, {mensaje:fecha, id:tarjetas.length, colorful:color}])
       }

    const deleteTarjeta = (tarjetaId) => {
    setTarjetas(tarjetas.filter(tarjeta => tarjeta.id !== tarjetaId))
    }
  
    
    const colores = (e) => {
      
      const reader= new FileReader()
      reader.readAsDataURL(e.target.files[0])
      reader.addEventListener("load",direct=>{
        setColor(direct.currentTarget.result);
        
      })
    }
        

      
  
  return (
        <div className="app2">
        <div className="app2_header"> 
        {/* <h1 >list</h1> */}
        <form onSubmit={handleSubmit}>
            <input className="form-control app2_input" type="date"  onChange={e=>setFecha(e.target.value)}/>
            {/* <input className="app2_input" type="color" onChange={e=>setColor(e.target.value)} /> */}
            
            <input className="app2_inputs form-control"
             type="file" onChange={colores} />
            
            <button className="form-control app2_boton">introducir tarjeta</button>
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

