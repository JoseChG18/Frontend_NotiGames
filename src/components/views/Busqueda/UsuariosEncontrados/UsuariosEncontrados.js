import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UsuariosEncontrados = (props) => {
  const [avatar, setAvatar] = useState();

  useEffect(() => {
    axios.get("api/user/avatar/" + props.datos.id).then((res) => {
      setAvatar("http://localhost:8000/uploads/avatars/" + res.data);
    });
  }, [props.datos.id]);
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <Link to={"/profile/" + props.datos.id}>
            <img
              src={avatar}
              className="img-fluid rounded-start"
              alt="FotoPerfil"
            />
          </Link>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">
              <Link to={"/profile/" + props.datos.id}>
                {props.datos.nombre + " " + props.datos.apellidos}
              </Link>
            </h5>
            <p className="card-text">Username: {props.datos.username}</p>
            <p className="card-text">Email: {props.datos.email}</p>
            <p className="card-text">Provincia: {props.datos.provincia}</p>
            <p className="card-text">Ciudad: {props.datos.ciudad}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsuariosEncontrados;
