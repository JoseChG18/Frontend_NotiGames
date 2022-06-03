import React, { useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import axios from "axios";

function AdminPanel() {
  const [juegos, setJuegos] = useState();
  const [users, setUsers] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get("api/game").then((res) => {
      setJuegos(res.data);
    });
    axios.get("api/user").then((res) => {
      setUsers(res.data);
    });
    setLoading(false);
  }, []);
  const agregarAdmin = () => {};
  const modificarJuego = () => {};
  const eliminarUser = (idUser) => {
      console.log(idUser)
  };
  const eliminarJuego = () => {};
  //   console.log(users);
  //   console.log(juegos);
  if (loading) {
    return (
      <div className="adminPanel">
        <Header />
        Cargando...
        <Footer />
      </div>
    );
  } else {
    return (
      <div className="adminPanel">
        <Header />
        <div className="Estadisticas d-flex mx-auto my-auto align-items-start">
          <div
            className="col-3 nav flex-column nav-pills"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <button
              className="nav-link active"
              id="v-pills-users-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-users"
              type="button"
              role="tab"
              aria-controls="v-pills-users"
              aria-selected="false"
            >
              Usuarios
            </button>
            <button
              className="nav-link"
              id={"v-pills-juegos-tab"}
              data-bs-toggle="pill"
              data-bs-target="#v-pills-juegos"
              type="button"
              role="tab"
              aria-controls="v-pills-juegos"
              aria-selected="false"
            >
              Juegos
            </button>
          </div>
          <div className="col-9 tab-content" id="v-pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="v-pills-users"
              role="tabpanel"
              aria-labelledby="v-pills-users-tab"
            >
              USUARIOS ADMINISTRADORES
              {users
                ? users.map((user) =>
                    user.admin === 1 ? (
                      <div>
                        {user.username}{" "}
                        <input type={"text"} value={user.admin} />
                        <button
                          type="button"
                          className="btn btn-outline-danger"
                          onClick={eliminarUser(user.id)}
                        >
                          Eliminar
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-success"
                        >
                          Modificar
                        </button>
                      </div>
                    ) : (
                      ""
                    )
                  )
                : ""}
              USUARIOS NO ADMINS
              {users
                ? users.map((user) =>
                    user.admin === 0 ? (
                      <div>
                        {user.username}{" "}
                        <input type={"text"} value={user.admin} />
                        <button
                          type="button"
                          className="btn btn-outline-danger"
                          onClick={eliminarUser(user.id)}
                        >
                          Eliminar
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-success"
                        >
                          Modificar
                        </button>
                      </div>
                    ) : (
                      ""
                    )
                  )
                : ""}
            </div>

            <div
              className="tab-pane fade"
              id="v-pills-juegos"
              role="tabpanel"
              aria-labelledby="v-pills-juegos-tab"
            >
              {juegos
                ? juegos.map((juego) => (
                    <div>
                      <input type={"text"} value={juego.name} />
                      <button type="button" className="btn btn-outline-success">
                        Modificar
                      </button>
                      <button type="button" className="btn btn-outline-danger">
                        Eliminar
                      </button>
                    </div>
                  ))
                : ""}
              <div>
                <input type={"text"} />
                <button type="button" className="btn btn-outline-success">
                  Añadir
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default AdminPanel;
