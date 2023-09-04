import { Proyecto } from "./proyecto.jsx";
import "./proyectos.css";


export function Proyectos() {
  return (
    <div className="proyectos">
      <Proyecto
        name="proyecto 1"
        descripcion='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum rem
        reiciendis maxime atque deleniti iure molestias similique ducimus.
        Tempore amet impedit vero at rem exercitationem. Blanditiis eveniet eius
        distinctio quo.'
        linkgit="https://github.com/spartanhalo16/mypageweb"
        linkhtml="../../api1.html"
        imagen="5ed26904ae2d435276d67dad0d6404ba.jpeg"
      ></Proyecto>

      <Proyecto
        name="proyecto 2"
        descripcion='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum rem
        reiciendis maxime atque deleniti iure molestias similique ducimus.
        Tempore amet impedit vero at rem exercitationem. Blanditiis eveniet eius
        distinctio quo.'
        linkgit="https://github.com/spartanhalo16/mypageweb"
        linkhtml="../../listatareas.html"
        imagen="5ed26904ae2d435276d67dad0d6404ba.jpeg"
      ></Proyecto>


    </div>

  )
}

