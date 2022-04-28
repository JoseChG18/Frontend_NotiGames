function EstadisticaLOL(){
    return(
        <div
              className="tab-pane fade show active p-3"
              id="nav-lol"
              role="tabpanel"
              aria-labelledby="nav-lol-tab"
            >
              {/* <!-- Formulario LOL --> */}

              <form action="" method="post" id="lolFormId">
                <div className="row g-3 m-1 align-items-center p-1">
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

                <div className="row g-3 align-items-center p-1">
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

                <div className="row g-3 align-items-center p-1">
                  <div className="col-3">
                    <label htmlFor="inputPassword6" className="col-form-label">
                      Rol:{" "}
                    </label>
                  </div>
                  <div className="col-6">
                    <input
                      name="rol"
                      value="<?php echo $rol ?>"
                      type="text"
                      id="inputPassword6"
                      className="form-control"
                      aria-describedby="passwordHelpInline"
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