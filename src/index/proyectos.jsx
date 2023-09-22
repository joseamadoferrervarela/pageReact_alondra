import { Proyecto } from "./proyecto.jsx";
import "./proyectos.css";


export function Proyectos() {
  return (
    <div className="proyectos">
      <Proyecto
        name="proyecto 1 traer informacion de cualquier canal de youtube "
        descripcion='Este es la aplicacion de la API de youtube data V3, en ella se cargan las listas de reproduccion de las secciones principales de cualquier canal de youtube, solo debes introducir el id del canal, y cargar la informacion.'
        linkgit="https://github.com/joseamadoferrervarela/youtubedataapiv3"
        linkhtml="#/apiyoutubedatav3"
        imagen="../Captura de pantallssss.png"
      ></Proyecto>

      

      <Proyecto
        name="proyecto 2 base de datos"
        descripcion='Esta es una aplicacion de una base de datos donde puedes añadir alguna persona y dar una descripcion sobe ella, puedes manipular esta base de datos añadiendo, editando y eliminado perosonajes '
        linkgit="https://github.com/joseamadoferrervarela/mycrud"
        linkhtml="#/mycrud"
        imagen="../Captura de pantallaas.png"
      ></Proyecto>

<Proyecto
        name="proyecto 3 lista de tareas"
        descripcion='Esta es una aplicacion lista de tareas, puedes tener un mejor control de tus actividades, añadiendo multiples tarjetas, estableciendo fecha hora y actividad, tambien puedes marcar las tareas finalizadas en cada tarjeta'
        linkgit="https://github.com/joseamadoferrervarela/listtask"
        linkhtml="#/listadetareas"
        imagen="../Captura de pantallaqw.png"
      ></Proyecto>



    </div>

  )
}

