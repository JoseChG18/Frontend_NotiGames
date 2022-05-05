import { useState } from "react";

function EstadisticaRL(){

  const [rango,setRango] = useState("");
  const [horas,setHoras] = useState("");
  const [goles,setGoles] = useState("");
  const [saves,setSAves] = useState("");

  const onChangeRango = (e) =>{
    const rango = e.target.value;
    setRango(rango);
  }

  const onChangeHoras = (e) => {
    const horas = e.target.value;
    setHoras(horas);
  }

  const onChangeGoles = (e) => {
    const goles = e.target.value;
    setHoras(goles);
  }

  const onChangeSaves = (e) => {
    const saves = e.target.value;
    setHoras(saves);
  }
    return(
        <div
              className="tab-pane fade p-3"
              id="nav-rl"
              role="tabpanel"
              aria-labelledby="nav-rl-tab"
            >
              {/* <!-- Formulario Rocket --> */}
              <form action="" method="post" id="rocketFormId">
                <div className="row g-3 align-items-center  p-1">
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
                      type=" text"
                      className="form-control"
                      title="Introduce el Rango que dispongas."
                    />
                  </div>
                </div>

                <div className="row g-3 align-items-center  p-1">
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
                      type=" text"
                      className="form-control"
                      title="Introduce el numero de horas jugadas."
                    />
                  </div>
                </div>

                <div className="row g-3 align-items-center  p-1">
                  <div className="col-3">
                    <label htmlFor="goles" className="col-form-label">
                      Numero de goles:{" "}
                    </label>
                  </div>
                  <div className="col-6">
                    <input
                      name="goles"
                      value={goles}
                      onChange={onChangeGoles}
                      type="text"
                      className="form-control"
                      title="Introduce el numero de goles marcados."
                    />
                  </div>
                </div>

                <div className="row g-3 align-items-center  p-1">
                  <div className="col-3">
                    <label htmlFor="saves" className="col-form-label">
                      Numero de salvadas:{" "}
                    </label>
                  </div>
                  <div className="col-6">
                    <input
                      name="saves"
                      value={saves}
                      onChange={onChangeSaves}
                      type="text"
                      className="form-control"
                      title="Introduce el numero de salvadas en partidos."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-outline-primary"
                  name="saveFormRL"
                >
                  Guardar Estadisticas
                </button>
              </form>
            </div>
    )
}

export default EstadisticaRL;