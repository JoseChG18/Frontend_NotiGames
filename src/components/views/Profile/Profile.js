import React, { useEffect, useState } from "react";
import "./Profile.scss";

import Header from "../Header";
import Footer from "../Footer";

import FotoPerfil from "./FotoPerfil";
import Estadisticas from "./Estadisticas";
import { Link, useParams } from "react-router-dom";

function Profile() {
  // const id = localStorage.getItem("id")
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", localStorage.getItem("token"));

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    fetch("http://localhost:8000/api/user/" + localStorage.getItem("id"), requestOptions)
      .then((response) => response.json())
      .then((result) => setProfile(result));
  }, []);

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
                      <div className="col-sm-9 text-secondary">
                        {profile.nombre + " " + profile.apellidos}
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Email</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {profile.email}
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Usuario</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {profile.username}
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Telefono</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {profile.telefono}
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Ciudad</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {profile.ciudad}
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Provincia</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {profile.provincia}
                      </div>
                    </div>
                    <hr />
                    <div className="btn-edit-profile">
                      <div className="row">
                        <div className="col-sm-3 ">
                          <Link to={"edit"} className="btn btn-outline-primary">
                            Editar
                          </Link>
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

export default Profile;
