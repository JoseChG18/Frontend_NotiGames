/**
 * En esta pagina tenemos el template para mostrar el footer default.
 * 
 * La manera en que esta el estilo habria que cambiarla. no es buena practica  
 * ponerlo como objeto o inline
 */
import "./Footer.scss";

function Footer() {
  return (
    <footer className="text-center text-lg-start">
      <div className="text-center p-3" >
        © 2022 Copyright:&nbsp;
        <a href="/" className="text-dark">
          itsDavyd & TheLordSwOrd
        </a>
      </div>
    </footer>
  );
}
export default Footer;
