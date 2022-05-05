import "./Register.css";
import Header from "../Header";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import { useState } from "react";

function Register() {

  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [provincia, setProvincia] = useState("");
  const [ciudad, setCiudad] = useState("");

  const onChangeUsuario = (e) =>{
    const usuario = e.target.value;
    setUsuario(usuario)
  }
  const onChangePassword = (e) =>{
    const password = e.target.value;
    setPassword(password)
  }
  const onChangeNombre = (e) =>{
    const nombre = e.target.value;
    setNombre(nombre)
  }
  const onChangeApellidos = (e) =>{
    const apellidos = e.target.value;
    setApellidos(apellidos)
  }
  const onChangeEmail = (e) =>{
    const email = e.target.value;
    setEmail(email)
  }
  const onChangeTelefono = (e) =>{
    const telefono = e.target.value;
    setTelefono(telefono)
  }
  const onChangeProvincia = (e) =>{
    const provincia = e.target.value;
    setProvincia(provincia)
  }
  const onChangeCiudad = (e) =>{
    const ciudad = e.target.value;
    setCiudad(ciudad)
  }
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
                      value={usuario}
                      onChange={onChangeUsuario}
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Contraseña</label>
                    <input
                      type="password"
                      className="form-control"
                      name="pass"
                      placeholder="Ingrese su Contraseña"
                      value={password}
                      onChange={onChangePassword}
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
                      value={nombre}
                      onChange={onChangeNombre}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="labels">Apellidos</label>
                    <input
                      type="text"
                      className="form-control"
                      name="apellidos"
                      placeholder="Apellidos"
                      value={apellidos}
                      onChange={onChangeApellidos}
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
                      value={email}
                      onChange={onChangeEmail}
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Telefono movil</label>
                    <input
                      type="text"
                      className="form-control"
                      name="telefono"
                      placeholder="Ingrese el numero de telefono"
                      value={telefono}
                      onChange={onChangeTelefono}
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Provincia</label>
                    <input
                      type="text"
                      className="form-control"
                      name="provincia"
                      placeholder="Ingrese la Provincia"
                      value={provincia}
                      onChange={onChangeProvincia}
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Ciudad</label>
                    <input
                      type="text"
                      className="form-control"
                      name="ciudad"
                      placeholder="Ciudad"
                      value={ciudad}
                      onChange={onChangeCiudad}
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
