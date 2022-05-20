import React, { useEffect, useState } from "react";
import "./EditProfile.scss";
import Header from "../Header";
import Footer from "../Footer";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function EditProfile(props) {
  // const id = useParams().id;
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
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [nombre, setNombre] = useState(profile.nombre);
  const [apellidos, setApellidos] = useState(profile.apellidos);
  const [email, setEmail] = useState(profile.email);
  const [telefono, setTelefono] = useState(profile.telefono);
  const [provincia, setProvincia] = useState(profile.provincia);
  const [ciudad, setCiudad] = useState(profile.ciudad);

  const onChangeUsuario = (e) => {
    const usuario = e.target.value;
    console.log(e.target.value)
    setUsuario(usuario)
  }
  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password)
  }
  const onChangeNombre = (e) => {
    const nombre = e.target.value;
    setNombre(nombre)
  }
  const onChangeApellidos = (e) => {
    const apellidos = e.target.value;
    setApellidos(apellidos)
  }
  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email)
  }
  const onChangeTelefono = (e) => {
    const telefono = e.target.value;
    setTelefono(telefono)
  }
  const onChangeProvincia = (e) => {
    const provincia = e.target.value;
    setProvincia(provincia)
  }
  const onChangeCiudad = (e) => {
    const ciudad = e.target.value;
    setCiudad(ciudad)
  }

  

  const actualizaPerfil = () => {
    // peticion para actualizar perfil
    let formData = new FormData();

    formData.append("nombre", nombre)
    formData.append("apellidos", apellidos)
    formData.append("telefono", telefono)
    formData.append("provincia", provincia)
    formData.append("ciudad", ciudad)
    formData.append("email", email)
    formData.append("username", usuario)
    formData.append("password", password)

    var myHeaders = new Headers();
    myHeaders.append("Authorization", localStorage.getItem("token"));

    // falta pasar el header que es para saber si esta autentificado
    axios.defaults.withCredentials = true;
    axios
      .put("http://localhost:8000/api/user/" + localStorage.getItem("id"), {
        nombre: nombre,
        apellidos: apellidos,
        telefono: telefono,
        provincia : provincia,
        ciudad:ciudad,
        email: email,
        username: usuario,
        password: password,
      }, myHeaders)
      .then((response) => {
        console.log(response.data.data.id);
      });

    // fetch("http://localhost:8000/api/user/"+localStorage.getItem("id"),requestOptions)
    // .then( (response) => response.json())
    // .then( (result) => console.log(result))
    
  }


  return (
    <div id="load">
      <Header />

      {/* Inicio Contenedor Editar-Perfil */}
      <form>
        <div className="simu-body d-flex justify-content-center aling-self-center">
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
                        defaultValue={profile.username}
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
                        defaultValue={profile.password}
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
                        defaultValue={profile.nombre}
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
                        defaultValue={profile.apellidos}
                        onChange={onChangeApellidos}
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
                        defaultValue={profile.email}
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
                        defaultValue={profile.telefono}
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
                        defaultValue={profile.provincia}
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
                        defaultValue={profile.ciudad}
                        onChange={onChangeCiudad}
                      />
                    </div>
                  </div>
                  <div className="mt-5 text-center">
                    <Link
                      to={"/profile/" + localStorage.getItem("id")}
                      onClick={() => actualizaPerfil()}
                      className="btn btn-primary profile-button"
                      type="submit"
                    >
                    Editar
                    </Link>
                    <Link
                      to={"/profile/" + localStorage.getItem("id")}
                      className="btn btn-primary profile-button"
                    >
                      Cancelar
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      {/* Fin Contenedor Editar-Perfil */}
      <Footer />
    </div>
  );
}

export default EditProfile;
