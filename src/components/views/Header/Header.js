/**
 * En esta pagina tenemos el template para mostrar el nav-bar default.
 */

/**
 * https://getbootstrap.com/docs/5.0/components/navbar/
 */
import "./Header.scss";
import logo from "../../../images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

/**
 * Funcion contenedor Nav-bar.
 * Esta funcion genera el contenedor navbar, el cual necesita verificar unas comprobaciones de usuario para verificar componentes de su interior.
 * @param mixed props
 * @return [cuerpo HTML] Retorna el cuerpo del html del contenedor navbar del usuario.
 */

function Header(props) {
  const navigate = useNavigate();
  const id = (JSON.parse(localStorage.getItem("user"))) ? JSON.parse(localStorage.getItem("user")).id : "";
  const logout = (e) => {
    e.preventDefault();
    axios.post("api/logout").then((response) => {
      if (response.data.status === 200) {
        localStorage.removeItem("auth_token");
        localStorage.removeItem("user");
        alert(response.data.message);
        navigate("/");
      }
    }
    )
  }

  let AuthContext = "";

  if (localStorage.getItem('auth_token')) {
    AuthContext = (<li className="nav-item dropdown">
      <a
        href="/"
        className="nav-link active dropdown-toggle"
        id="navbarDropdown"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        User
      </a>

      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        <li>
          <Link to={"/profile/" + id} className="dropdown-item">
            Perfil
          </Link>
        </li>
        <li>
          <button type="button" onClick={logout} className="dropdown-item">
            Cerrar Sesión
          </button>
        </li>
      </ul>
    </li>
    )
  } else {
    AuthContext = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to={"/login"} className="nav-link">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/register"} className="nav-link">
            Register
          </Link>
        </li>
      </ul>
    )
  }

  return (
    <nav className="navbar navbar-light navbar-expand-lg">
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand">
          <img src={logo} alt="logo" width="100rem" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to={"/"} className="nav-link active" aria-current="page">
                Inicio
              </Link>
            </li>
            {AuthContext}
          </ul>
          <div className="d-flex filterIdClass">
            {/**<ul>
                            <li id="showFilter" onclick="showHideAddNotice('showFilter')" className="addNoticia align-self-center m-2"><a href="#"><img src="/codigoapp/asset/imagenes/filtrar.png" alt=""/></a></li>
                            <li id="showId" onclick="showHideAddNotice('showId')" className="addNoticia align-self-center m-2"><a href="#"><img src="/codigoapp/asset/imagenes/add.png" alt=""/></a></li>
                            <li id="showFechas" onclick="showHideAddNotice('showFechas')" className="addNoticia align-self-center m-2"><a href="#"><img src="/codigoapp/asset/imagenes/fechas.png" alt=""/></a></li>
                        </ul>*/}
          </div>
          <form action="" method="POST" className="d-flex">
            <input
              name="seName"
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              name="search"
              className="btn btn-outline-dark"
              type="submit"
              value="search"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;
