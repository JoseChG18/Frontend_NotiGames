/**
 * En esta pagina tenemos el template para mostrar el nav-bar default.
 */

/**
 * https://getbootstrap.com/docs/5.0/components/navbar/
 */
function Nav(props) {
  return (
    <nav
      className="navbar navbar-light navbar-expand-lg"
      style={{ backgroundColor: "#e3f2fd" }}
    >
      <div className="container-fluid">
        <a href="/" className="navbar-brand">
          <img
            src="/public/logo.png"
            alt="logo"
            width="100rem"
          />
        </a>
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
              <a
                className="nav-link active"
                aria-current="page"
                href="/"
              >
                Noticias
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                href="/"
                className="nav-link active dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {props.usuario.nombre}
              </a>

              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a
                    className="dropdown-item"
                    href="/"
                  >
                    Perfil
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="/"
                  >
                    Log Out
                  </a>
                </li>
              </ul>
            </li>
            {/*<li id="showFilter" onclick="showHideAddNotice('showFilter')" className="addNoticia align-self-center m-2"><a href="#"><img src="/codigoapp/asset/imagenes/filtrar.png" alt=""></a></li>
                        <li id="showId" onclick="showHideAddNotice('showId')" className="addNoticia align-self-center m-2"><a href="#"><img src="/codigoapp/asset/imagenes/add.png" alt=""></a></li> **/}
          </ul>
          <div className="d-flex filterIdClass">
            {/**<ul>
                            <li id="showFilter" onclick="showHideAddNotice('showFilter')" className="addNoticia align-self-center m-2"><a href="#"><img src="/codigoapp/asset/imagenes/filtrar.png" alt=""/></a></li>
                            <li id="showId" onclick="showHideAddNotice('showId')" className="addNoticia align-self-center m-2"><a href="#"><img src="/codigoapp/asset/imagenes/add.png" alt=""/></a></li>
                            <li id="showFechas" onclick="showHideAddNotice('showFechas')" className="addNoticia align-self-center m-2"><a href="#"><img src="/codigoapp/asset/imagenes/fechas.png" alt=""/></a></li>
                        </ul>*/}
            <form
              action=''
              method="POST"
              className="d-flex"
            >
              <input
                name="seName"
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                name="search"
                className="btn btn-outline-success"
                type="submit"
                value="search"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
