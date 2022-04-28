function EstadisticaRL(){
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
                    <label htmlFor="inputPassword6" className="col-form-label">
                      MMR:{" "}
                    </label>
                  </div>
                  <div className="col-6">
                    <input
                      name="mmr"
                      value="<?php echo $mmr ?>"
                      type=" text"
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
                      type=" text"
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
                      Numero de goles:{" "}
                    </label>
                  </div>
                  <div className="col-6">
                    <input
                      name="goles"
                      value="<?php echo $goles ?>"
                      type="text"
                      id="inputPassword6"
                      className="form-control"
                      aria-describedby="passwordHelpInline"
                      title="Introduce el numero de goles marcados."
                    />
                  </div>
                </div>

                <div className="row g-3 align-items-center  p-1">
                  <div className="col-3">
                    <label htmlFor="inputPassword6" className="col-form-label">
                      Numero de salvadas:{" "}
                    </label>
                  </div>
                  <div className="col-6">
                    <input
                      name="saves"
                      value="<?php echo $saves ?>"
                      type="text"
                      id="inputPassword6"
                      className="form-control"
                      aria-describedby="passwordHelpInline"
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