import "./formulario.css";

export function Formulario() {
  return (
    
    <form className="formulario" action="https://formsubmit.co/minewlifeasawebdeveloper@gmail.com" method="POST">
<input className="formulario_nombre" placeholder="name" type='text' name='nombre'></input>
<input className="formulario_correo" placeholder="correo electronico"type='email' name='email'></input>
<textarea className="formulario_mensaje" 
 placeholder="mensaje" name='mensaje'  type="textarea"></textarea>
<button className="formulario_boton" onClick={e=>alert('el mensaje ha sido enviado')}> click to send me a message</button>


<input type="hidden" name='_next' value="http://localhost:5173/" />
<input type="hidden" name="_captcha" value="false"/>

    </form>

  
  )
}
