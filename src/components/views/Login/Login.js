import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

function Login() {
  return (
    <div className="main">
      <Header />
      <div className="loginCenter">
        <form action="http://localhost:8000/api/auth/login" method="post" className="formularioLoginClass">
          <h2 className="text-center">NotiGames</h2>
          <div className="mb-3">
            <label htmlFor="usuario" className="form-label">
              Usuario
            </label>
            <input type="text" className="form-control" name="usuario" id="usuario" />
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
            />
          </div>
          <button type="submit" className="btn my-2 btn-primary">
            Iniciar Sesion
          </button>
          <Link to={"/register"} className="btn my-2 btn-primary">Registrarse</Link>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
