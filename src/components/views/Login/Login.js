import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import { useState } from "react";

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
  return (
    <div className="main">
      <Header />
      <div className="loginCenter">
        <form
          action="http://localhost:8000/api/auth/login"
          method="post"
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
          <button type="submit" className="btn my-2 btn-primary">
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
