function EstadisticaCSGO(){
    return(
        <div
              className="tab-pane fade p-3"
              id="nav-cs"
              role="tabpanel"
              aria-labelledby="nav-cs-tab"
            >
              {/* <!-- Formulario CSGO --> */}

              <form action="" method="post" id="csgoFormId">
                <div className="row g-3 align-items-center  p-1">
                  <div className="col-3">
                    <label htmlFor="inputPassword6" className="col-form-label">
                      MMR:{" "}
                    </label>
                  </div>
                  <div className="col-6">
                    <input
                      name="mmr"
                      value="<?php echo $mmr ?>"
                      type="text"
                      id="inputPassword6"
                      className="form-control"
                      aria-describedby="passwordHelpInline"
                      title="Introduce el MMR que dispongas."
                    />
                  </div>
                </div>

                <div className="row g-3 align-items-center  p-1">
                  <div className="col-3">
                    <label htmlFor="inputPassword6" className="col-form-label">
                      Numero de horas:{" "}
                    </label>
                  </div>
                  <div className="col-6">
                    <input
                      name="nHoras"
                      value="<?php echo $nHoras ?>"
                      type="text"
                      id="inputPassword6"
                      className="form-control"
                      aria-describedby="passwordHelpInline"
                      title="Introduce el numero de horas jugadas."
                    />
                  </div>
                </div>

                <div className="row g-3 align-items-center  p-1">
                  <div className="col-3">
                    <label htmlFor="inputPassword6" className="col-form-label">
                      Numero de kills:{" "}
                    </label>
                  </div>
                  <div className="col-6">
                    <input
                      name="kills"
                      value="<?php echo $kills ?>"
                      type="text"
                      id="inputPassword6"
                      className="form-control"
                      aria-describedby="passwordHelpInline"
                      title="Introduce el numero de kills realizadas."
                    />
                  </div>
                </div>

                <div className="row g-3 align-items-center  p-1">
                  <div className="col-3">
                    <label htmlFor="inputPassword6" className="col-form-label">
                      Muertes:{" "}
                    </label>
                  </div>
                  <div className="col-6">
                    <input
                      name="muertes"
                      value="<?php echo $muertes ?>"
                      type="text"
                      id="inputPassword6"
                      className="form-control"
                      aria-describedby="passwordHelpInline"
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