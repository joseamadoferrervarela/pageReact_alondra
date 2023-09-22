import "./app.css";
import { Nav } from "./nav.jsx";
import { Bienvenida } from "./bienvenida";
import {Lenguajes} from "./lenguajes.jsx";
import {Idioma} from "./idioma.jsx";
import { Proyectos } from "./proyectos.jsx";
import { Sobremi } from "./sobremi.jsx";


export function App() {
  return (
   
    <div className="main">
      <Nav></Nav>
      <Bienvenida></Bienvenida>
      <Lenguajes></Lenguajes>
      <Idioma></Idioma>
      <Proyectos></Proyectos>
      <Sobremi></Sobremi>
    </div>
  );
}

