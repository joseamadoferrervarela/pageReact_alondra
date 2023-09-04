import { Foto } from "./foto.jsx";
import "./bienvenida.css";

export function Bienvenida() {
  return (
    <div className="bienvenida">
      <div className="bienvenida_item">
        <Foto></Foto>
        <div className="bienvenida_info">
          <h1 className="bienvenida_nombre">
            Hellow I am Jose web developer front end
            </h1>

          
        </div>
      </div>
    </div>
  );
}
