import React, { useEffect, useState } from "react";
import "./EditStats.scss";
import Header from "../Header";
import Footer from "../Footer";
import StatsContent from "./StatsContent";
import axios from "axios";
import { useParams } from "react-router-dom";

function EditStats(props) {
  const id_user = useParams().id;
  const [perfil, setPerfil] = useState([]);

  const [juegos, setJuegos] = useState([]);

  useEffect(() => {
    axios.get("api/game").then((response) => {
      setJuegos(response.data);
    });
    axios.get("api/user/" + id_user).then((response) => {
      setPerfil(response.data);
    });
  }, [id_user]);
  console.log(juegos);

  let juegosPropios = [];
  for (const index in perfil.games) {
    juegosPropios.push(perfil.games[index][0]);
  }

  let otrosJuegos = [];
  otrosJuegos = juegos;
  for (const index in otrosJuegos) {
    for (const propioJuego of juegosPropios) {
      if (propioJuego.id === otrosJuegos[index].id) {
        otrosJuegos.splice(index, 1);
      }
    }
  }
console.log(perfil)
  //AQUI NUEVA INTERFAZ PARA CREAR O EDITAR INTERFAZ

  return (
    <div className="contEditStats">
      <Header />
      <div className="Estadisticas d-flex mx-auto my-auto align-items-start">
        <div
          className="lateralIzq col-3 nav flex-column nav-pills"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <li>Mis Juegos</li>
          {juegosPropios.length > 0
            ? juegosPropios.map((mios) => (
                <button
                  className="nav-link"
                  id={"v-pills-" + mios.id + "-tab"}
                  data-bs-toggle="pill"
                  data-bs-target={"#v-pills-" + mios.id}
                  type="button"
                  role="tab"
                  aria-controls={"v-pills-" + mios.id}
                  aria-selected="false"
                  key={mios.id}
                >
                  {mios.name}
                </button>
              ))
            : "No tienes ningun juego"}

          <li>Otro juegos</li>

          {otrosJuegos.length > 0
            ? otrosJuegos.map((otros) => (
                <button
                  key={otros.id}
                  className="nav-link"
                  id={"v-pills-" + otros.id + "-tab"}
                  data-bs-toggle="pill"
                  data-bs-target={"#v-pills-" + otros.id}
                  type="button"
                  role="tab"
                  aria-controls={"v-pills-" + otros.id}
                  aria-selected="false"
                >
                  {otros.name}
                </button>
              ))
            : "No quedan mas juegos"}
        </div>
        <div className="panelStats col-9 tab-content" id="v-pills-tabContent">
        <div
        className="tab-pane fade show active"
        role="tabpanel"
        >
        Aqui seran los paneles de Stats (INPUTS)
        </div>
          
          {juegosPropios.map((juego) => (
            <StatsContent key={juego.id} id={juego.id}stats={perfil.statistics}/>
          ))}
          {otrosJuegos.map((juego) => (
            <div
              key={juego.id}
              className="tab-pane fade"
              id={"v-pills-" + juego.id}
              role="tabpanel"
              aria-labelledby={"v-pills-" + juego.id + "-tab"}
            >
              {juego.name}
              <br/>
              <input type="text" defaultValue={"Horas"}/> {"=>"} <input type={"text"} defaultValue={"1000"}/><button>modificar</button>
              <br/>
              <input type="text"/> {"=>"} <input type={"text"}/><button>agregar</button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
//  <div class="tab-content" id="v-pills-tabContent">
//     <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">...</div>
//     <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">...</div>
//     <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
//     <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div>
//   </div>
export default EditStats;
