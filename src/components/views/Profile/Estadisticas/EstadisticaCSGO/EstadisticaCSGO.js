import { useState } from "react";

function EstadisticaCSGO(){
  const [rango,setRango] = useState("");
  const [horas,setHoras] = useState("");
  const [kills,setKills] = useState("");
  const [muertes,setMuertes] = useState("");

  const onChangeRango = (e) => {
    const rango = e.target.value;
    setRango(rango);
  }

  const onChangeHoras = (e) => {
    const horas = e.target.value;
    setHoras(horas);
  }
  const onChangeKills = (e) => {
    const kills = e.target.value;
    setKills(kills);
  }
  const onChangeMuertes = (e) => {
    const muertes = e.target.value;
    setMuertes(muertes);
  }
    return(
        <div
              className="tab-pane fade p-3"
              id="nav-cs"
              role="tabpanel"
              aria-labelledby="nav-cs-tab"
            >
              {/* <!-- Formulario CSGO --> */}

              <form action="" method="post" id="csgoFormId">
                <div className="row g-3 align-items-center p-1">
                  <div className="col-3">
                    <label htmlFor="rango" className="col-form-label">
                      Rango: 
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
                      type="text"
                      className="form-control"
                      title="Introduce el numero de horas jugadas."
                    />
                  </div>
                </div>

                <div className="row g-3 align-items-center  p-1">
                  <div className="col-3">
                    <label htmlFor="kills" className="col-form-label">
                      Numero de kills:{" "}
                    </label>
                  </div>
                  <div className="col-6">
                    <input
                      name="kills"
                      value={kills}
                      onChange={onChangeKills}
                      type="text"
                      className="form-control"
                      title="Introduce el numero de kills realizadas."
                    />
                  </div>
                </div>

                <div className="row g-3 align-items-center  p-1">
                  <div className="col-3">
                    <label htmlFor="muertes" className="col-form-label">
                      Muertes:{" "}
                    </label>
                  </div>
                  <div className="col-6">
                    <input
                      name="muertes"
                      value={muertes}
                      onChange={onChangeMuertes}
                      type="text"
                      className="form-control"
                      title="Introduce el numero de muertes sobre ti."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-outline-primary"
                  name="saveFormCSGO"
                >
                  Guardar Estadisticas
                </button>
              </form>
            </div>
    )
}

export default EstadisticaCSGO;