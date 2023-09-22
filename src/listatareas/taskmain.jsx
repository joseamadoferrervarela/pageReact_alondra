import "./taskmain.css";
export function Taskmain(props) {
  return (
    <div className="cond">
    <p className="fecha" style={{display: "inline-block"}}>{props.newfecha.mensaje}</p>
    <button className="form-control bot"onClick={e=>{props.deleteTarjeta(props.newfecha.id)}} >eliminar tarjeta</button>
    </div>
  )
}
// falta el onclick