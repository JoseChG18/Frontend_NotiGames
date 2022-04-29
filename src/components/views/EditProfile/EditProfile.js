import React from "react";
import "./EditProfile.css";
import Header from "../Header";
import Footer from "../Footer";
import { Link } from "react-router-dom";

function EditProfile(props) {
  return (
    <div id="load">
      <Header />

      {/* Inicio Contenedor Editar-Perfil */}
      <form action="" method="post">
        <div className="simu-body">
          <div className="container rounded bg-white mt-0 mb-0">
            <div className="row">
              <div className="col-md-4 border-end">
                <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                  <img
                    className="rounded-circle mt-5"
                    width="150px"
                    alt="Foto Default o tuya"
                    src="https://bootdey.com/img/Content/avatar/avatar7.png"
                  />
                </div>
              </div>
              <div className="col-md-8 border-end">
                <div className="p-3 py-5">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="text-right">Edita tu Perfil</h4>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-12">
                      <label className="labels">Usuario</label>
                      <input
                        type="text"
                        className="form-control"
                        name="user"
                        placeholder="Usuario"
                        value="UsuarioA"
                      />
                    </div>
                    <div className="col-md-12">
                      <label className="labels">Contraseña</label>
                      <input
                        type="password"
                        className="form-control"
                        name="pass"
                        placeholder="Ingrese su Contraseña"
                        value=""
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
                        value="NombreA"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="labels">Apellidos</label>
                      <input
                        type="text"
                        className="form-control"
                        name="apellidos"
                        placeholder="Apellidos"
                        value="ApellidosA"
                      />
                    </div>
                  </div>
                  <div className="row mt-2">
                  <div className="col-md-12">
                      <label className="labels">Email</label>
                      <input
                        type="text"
                        className="form-control"
                        name="email"
                        placeholder="example@gmail.com"
                        value="EmailA"
                      />
                    </div>
                    <div className="col-md-12">
                      <label className="labels">Telefono movil</label>
                      <input
                        type="text"
                        className="form-control"
                        name="telefono"
                        placeholder="Ingrese el numero de telefono"
                        value="TelefonoA"
                      />
                    </div>
                    <div className="col-md-12">
                      <label className="labels">Provincia</label>
                      <input
                        type="text"
                        className="form-control"
                        name="provincia"
                        placeholder="Ingrese la Provincia"
                        value="ProvinciaA"
                      />
                    </div>
                    <div className="col-md-12">
                      <label className="labels">Ciudad</label>
                      <input
                        type="text"
                        className="form-control"
                        name="ciudad"
                        placeholder="Ciudad"
                        value="CiudadA"
                      />
                    </div>
                  </div>
                  <div className="mt-5 text-center">
                    <input
                      className="btn btn-primary profile-button"
                      type="submit"
                      value="Editar"
                    />
                    <Link to={"/profile"} className="btn btn-primary profile-button">Cancelar</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      {/* Fin Contenedor Editar-Perfil */}
      <Footer/>
    </div>
  );
}

export default EditProfile;