import { useState } from "react";

function EstadisticaLOL(){

const [rango, setRango] = useState("");
const [horas,setHoras] = useState("");
const [ rol, setRol] = useState("");

  const onChangeRango = (e) => {
    const rango = e.target.value;
    setRango(rango);
  }
  const onChangeHoras = (e) => {
    const horas = e.target.value;
    setHoras(horas);
  }
  const onChangeRol = (e) => {
    const rol = e.target.value;
    setRol(rol);
  }
    return(
        <div
              className="tab-pane fade show active p-3"
              id="nav-lol"
              role="tabpanel"
              aria-labelledby="nav-lol-tab"
            >
              {/* <!-- Formulario LOL --> */}

              <form action="" method="post" id="lolFormId">
                <div className="row g-3 align-items-center p-1">
                  <div className="col-3">
                    <label htmlFor="rango" className="col-form-label">
                      Rango:{" "}
                    </label>
                  </div>
                  <div className="col-6">
                    <input
                      name="rango"
                      value={rango}
                      onChange={onChangeRango}
                      type="text"
                      className="form-control"
                      title="Introduce el Rango que dispongas."
                    />
                  </div>
                </div>

                <div className="row g-3 align-items-center p-1">
                  <div className="col-3">
                    <label htmlFor="nHoras" className="col-form-label">
                      Numero de horas:{" "}
                    </label>
                  </div>
                  <div className="col-6">
                    <input
                      name="nHoras"
                      value={horas}
                      onChange={onChangeHoras}
                      type="text"
                      className="form-control"
                      title="Introduce el numero de horas jugadas."
                    />
                  </div>
                </div>

                <div className="row g-3 align-items-center p-1">
                  <div className="col-3">
                    <label htmlFor="rol" className="col-form-label">
                      Rol:{" "}
                    </label>
                  </div>
                  <div className="col-6">
                    <input
                      name="rol"
                      value={rol}
                      onChange={onChangeRol}
                      type="text"
                      className="form-control"
                      title="Introduce tu posicion en el juego."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-outline-primary"
                  name="saveFormLOL"
                >
                  Guardar Estadisticas
                </button>
              </form>
            </div>
    )
}

export default EstadisticaLOL;