import "./app.css";
import { Bienvenida } from "./bienvenida";

import { Lenidioma } from "./lenidioma.jsx";
import { Proyectos } from "./proyectos.jsx";
import { Nav } from "./nav.jsx";
import { Sobremi } from "./sobremi.jsx";


export function App() {
  return (
   
    <div className="main">
      <Nav></Nav>
      <Bienvenida></Bienvenida>
      <Lenidioma></Lenidioma>
      <Proyectos></Proyectos>
      <Sobremi></Sobremi>
    </div>
  );
}

