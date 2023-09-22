import "./nav.css";

export function Nav() {
  return (
    <>
      <div className="linksarea">

        <a style={{textDecoration:"none"}}target='_blank'  href="https://t.me/joseamadoferrervarela">
          <div className="links">
            <i className="fa-brands fa-telegram"></i>
          </div>
        </a>

        <a style={{textDecoration:"none"}}
 
        target='_blank'href="https://www.facebook.com/amado.ferrer.583/">
          <div className="links">
          <i  class="fa-brands fa-facebook"></i>
          
          </div>
        </a>

        <a style={{textDecoration:"none"}} target='_blank' href="https://www.linkedin.com/in/amado-ferrer-33797a28a/">
          <div className="links">
          <i class="fa-brands fa-linkedin"></i>
          </div>
        </a>


        <a style={{textDecoration:"none"}} target='_blank' href="https://github.com/joseamadoferrervarela">
          <div className="links">
            <i className="fa-brands fa-github"></i>
          </div>
        </a>
      </div>
    </>
  );
}



function nav() {
  return (
    <div>nav</div>
  )
}

export default nav