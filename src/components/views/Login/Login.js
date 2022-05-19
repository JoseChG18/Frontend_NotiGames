import "./Login.scss";
import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import { useState } from "react";
import axios from "axios";

function Login() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  const onChangeUsuario = (e) => {
    const usuario = e.target.value;
    setUsuario(usuario);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const inicioSesion = () => {
    axios.defaults.withCredentials = true;
    axios.get("http://localhost:3000/sanctum/csrf-cookie").then(
      (response) => {
        axios.post('http://localhost:3000/api/login',{
          usuario : usuario,
          password : password  
        })
        .then((response) => {
          response.json()
        })
        .then((result) => console.log(result))
      }
    )
    // let formData = new FormData()

    // formData.append("usuario",usuario)
    // formData.append("password",password)

    // var myHeaders = new Headers();
    // myHeaders.append("Accept", "pplication/json");

    // let request = {
    //   method: "post",
    //   body: formData,
    //   headers: myHeaders,
    //   mode: 'no-cors'
    // }

    // fetch("http://localhost:8000/api/login", request)
    // .then((response) => response.json())
    // .then((result) => console.log(result))
    // .catch((e) => console.log(e))
  }
  return (
    <div className="main">
      <Header />
      <div className="loginCenter">
        <form
          className="formularioLoginClass"
        >
          <h2 className="text-center">NotiGames</h2>
          <div className="mb-3">
            <label htmlFor="usuario" className="form-label">
              Usuario
            </label>
            <input
              type="text"
              className="form-control"
              name="usuario"
              id="usuario"
              value={usuario}
              onChange={onChangeUsuario}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"
              value={password}
              onChange={onChangePassword}
            />
          </div>
          <button onClick={() => inicioSesion()} type="button" className="btn my-2 btn-primary">
            Iniciar Sesion
          </button>
          <Link to={"/register"} className="btn my-2 btn-primary">
            Registrarse
          </Link>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
