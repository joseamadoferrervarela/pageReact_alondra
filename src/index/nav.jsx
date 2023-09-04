import "./nav.css";

export function Nav() {
  return (
    <>
      <div className="linksarea">

        <a target='_blank'  href="https://t.me/joseamadoferrervarela">
          <div className="links">
            <i className="fa-brands fa-telegram"></i>
          </div>
        </a>

        <a target='_blank'href="https://wa.me/525523879510">
          <div className="links">
          
          <i style={{fontSize:'17px'}} class="fa-brands fa-square-whatsapp"></i>
          </div>
        </a>

        <a target='_blank' href="https://www.linkedin.com/in/amado-ferrer-33797a28a/">
          <div className="links">
          <i class="fa-brands fa-linkedin"></i>
          </div>
        </a>


        <a target='_blank' href="https://github.com/spartanhalo16">
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