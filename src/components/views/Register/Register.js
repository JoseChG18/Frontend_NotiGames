import "./Register.css";
import Header from "../Header";
import Footer from "../Footer";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div id="load">
      <Header />
      {/* Inicio Contenedor registro */}
      <form action="" method="post">
        <div className="container rounded bg-white mt-0 mb-0">
          <div className="row">
            <div className="col-md-4 border-end">
              <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                <img
                  className="rounded-circle mt-5"
                  width="150px"
                  alt="Foto Default"
                  src="https://bootdey.com/img/Content/avatar/avatar7.png"
                />
                <span>
                  ¿Ya tienes una cuenta?{" "}
                  <Link to={"/login"}>Inicia Sesión</Link>
                </span>
              </div>
            </div>
            <div className="col-md-8 border-end">
              <div className="p-3 py-5">
                <div className="d-flex justify-content-center align-items-center mb-3">
                  <h4 className="text-right">Registrarse en NotiGames</h4>
                </div>
                <div className="row mt-3">
                  <div className="col-md-12">
                    <label className="labels">Usuario</label>
                    <input
                      type="text"
                      className="form-control"
                      name="user"
                      placeholder="Usuario"
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Contraseña</label>
                    <input
                      type="password"
                      className="form-control"
                      name="pass"
                      placeholder="Ingrese su Contraseña"
                    />
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-md-6">
                    <label className="labels">Nombre</label>
                    <input
                      type="text"
                      className="form-control"
                      name="nombre"
                      placeholder="Nombre"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="labels">Apellidos</label>
                    <input
                      type="text"
                      className="form-control"
                      name="apellidos"
                      placeholder="Apellidos"
                    />
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-md-12">
                    <label className="labels">Correo</label>
                    <input
                      type="text"
                      className="form-control"
                      name="email"
                      placeholder="example@example.com"
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Telefono movil</label>
                    <input
                      type="text"
                      className="form-control"
                      name="telefono"
                      placeholder="Ingrese el numero de telefono"
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Provincia</label>
                    <input
                      type="text"
                      className="form-control"
                      name="provincia"
                      placeholder="Ingrese la Provincia"
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Ciudad</label>
                    <input
                      type="text"
                      className="form-control"
                      name="ciudad"
                      placeholder="Ciudad"
                    />
                  </div>
                </div>
                <div className="mt-5 text-center">
                  <input
                    className="btn btn-primary profile-button"
                    type="submit"
                    value="Registrarse"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      {/* Fin Contenedor registro */}
      <Footer />
    </div>
  );
}

export default Register;
