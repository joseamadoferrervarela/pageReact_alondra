import "./proyecto.css";

export function Proyecto(props) {
  return (
    <div className='proyecto'>

      <h1 className='proyecto_name'>{props.name}</h1>

      <p className="proyecto_descripcion"><b>{props.descripcion}</b></p>

      <img className="proyecto_imagen" src={props.imagen} />

      <a target="_blank" className='proyecto_boton' href={props.linkhtml}>
        <i class="fa-solid fa-arrow-right"></i><b> ir a la aplicacion</b>
      </a>

      <a target="_blank" className='proyecto_boton'href={props.linkgit}>
        <i className="fa-brands fa-github"></i> <b>ir al codigo</b>
      </a>

    </div>
  )
}
