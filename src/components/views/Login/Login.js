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

    // SE INTENTA CON FETCH
    // fetch("http://localhost:8000/sanctum/csrf-cookie",{method:"get"})
    // .then( (response) => {
    //   console.log(response);

    //   const xsrfCookies = document.cookie.split(';')
    //   .map(c => c.trim())
    //   .filter(c => c.startsWith("XSRF-TOKEN"));
    //   console.log(xsrfCookies)
    //   fetch("http://localhost:8000/api/login",{
    //     method:"post",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: {
    //       username: usuario,
    //       password: password,
    //     },
    //     credentials: 'include',
    //   }).then(
    //     (response) => {
    //       // console.log(response)
    //     }
    //   )
    // })

    // WORKS
    axios.defaults.withCredentials = true;
    axios.get("http://localhost:8000/sanctum/csrf-cookie").then(
      (response) => {
        axios
          .post("http://localhost:8000/api/login", {
            username: usuario,
            password: password,
          })
          .then((response) => {
            // console.log(response.data.data.id)
            localStorage.setItem("token", response.data.token_type +" "+ response.data.access_token);
            localStorage.setItem("id", response.data.data.id);
            console.log(localStorage.getItem("id"))
            console.log(localStorage.getItem("token"))
            axios.get("http://localhost:8000/api/user/"+response.data.data.id).then(
              (response) => {
                console.log(response)
              }
            )
          })
    });
  };
  return (
    <div className="main">
      <Header />
      <div className="loginCenter">
        <form className="formularioLoginClass">
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
          <Link
            onClick={() => inicioSesion()}
            to={"/"}
            className="btn my-2 btn-primary"
          >
            Iniciar Sesion
          </Link>
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
