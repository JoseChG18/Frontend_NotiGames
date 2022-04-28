import React, { Component } from "react";
import "./Profile.css";

import Header from "../Header";
import Footer from "../Footer";

import FotoPerfil from "./FotoPerfil";
import Estadisticas from "./Estadisticas";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        {/* Inicio Contenedor Perfil */}
        <div className="container-perfil contenedorPadre">
          {/* https://www.bootdey.com/snippets/view/profile-with-data-and-skills */}
          <div className="container-div">
            <div className="container">
              <div className="row gutters-sm">
                <div className="col-md-4 mb-3">
                  <FotoPerfil />
                </div>
                <div className="col-md-8">
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Nombre Completo</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">Manolito</div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Email</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          Paco@gmail.com
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Usuario</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">Pquito</div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Telefono</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">Existe</div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Ciudad</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">Aqumismo</div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Provincia</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">Aqui mismo</div>
                      </div>
                      <hr />
                      <div className="btn-edit-profile">
                        <div className="row">
                          <div className="col-sm-3 ">
                            <button
                              id="update"
                              // onClick="updateProfile('update')"
                              type="button"
                              className="btn btn-outline-primary"
                            >
                              Editar
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Estadisticas />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Profile;
