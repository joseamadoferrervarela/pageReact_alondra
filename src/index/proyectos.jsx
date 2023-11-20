import { Proyecto } from "./proyecto.jsx";
import "./proyectos.css";


export function Proyectos() {
  return (
    <div className="proyectos">
      <Proyecto
        name="proyecto 1 consumo api de youtube "
        descripcion='Esta es una aplicacion que consume la api, youtube data api v3, se consume la informacion y listas de reproduccion de la seccion principal de un canal de youtube, solo debes introducir la url de cualquier video relacionado al canal, y se mostrara la informacion y listas'
        linkgit="https://github.com/joseamadoferrervarela/youtubedataapiv3"
        linkhtml="#/apiyoutubedatav3"
        imagen="Captura de pantallssss.png"
      ></Proyecto>

      

      <Proyecto
        name="proyecto 2 base de datos crud"
        descripcion='Esta es una aplicacion, donde se usan las funciones crear, leer, modificar y eliminar los registros de una base de datos, puedes añadir alguna persona y dar un nombre y descripcion sobe ella, puedes manipular esta base de datos añadiendo, editando y eliminando personajes '
        linkgit="https://github.com/joseamadoferrervarela/mycrud"
        linkhtml="#/mycrud"
        imagen="Captura de pantallaas.png"
      ></Proyecto>

      <Proyecto
        name="proyecto 3 lista de tareas"
        descripcion='Esta es una aplicacion lista de tareas, puedes tener un mejor control de tus actividades, añadiendo multiples tarjetas, estableciendo fecha hora y actividad, tambien puedes marcar las tareas finalizadas en cada tarjeta, dando click encima de la tarea'
        linkgit="https://github.com/joseamadoferrervarela/listtask"
        linkhtml="#/listadetareas"
        imagen="Captura de pantallaqw.png"
      ></Proyecto>


       <Proyecto
        name="proyecto 4 lista de eventos + grafico "
        descripcion='Esta es una aplicacion donde se usan los datos de los eventos añadidos a una tabla, que te permite mediante graficos ver que tantos eventos se tienen por mes, se puede agregar, eliminar y modificar eventos'
        linkgit="https://github.com/joseamadoferrervarela/App-graficos"
        linkhtml="#/appgraficos"
        imagen="captura de pantalla192.png"
      ></Proyecto>




    </div>

  )
}

