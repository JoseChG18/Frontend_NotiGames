/**
 * Funcion que genera el contenedor Foto del Perfil.
 * 
 * @return [cuerpo HTML] Retorna la foto del perfil de cada usuario que tengan guardada en la bdd.
 */
function FotoPerfil() {
  return (
    // Edit de foto
    // https://bootdey.com/img/Content/avatar/avatar7.png
    <div className="card am">
      <div className="card-body">
        <div className="d-flex flex-column align-items-center text-center">
          <img
            src="https://bootdey.com/img/Content/avatar/avatar7.png"
            alt="fotoPerfil"
            className="rounded-circle"
            width="170"
          />
          <div className="mt-3">
            <form
              action="/codigoapp/source/controller/controllerSubidaFoto.php"
              method="POST"
              encType="multipart/form-data"
            >
              <div id="div_file">
                <p id="texto">Selecciona</p>
                <input type="file" name="imagen" id="btn_enviar" />
              </div>
              <div id="div_file">
                <p id="texto">Subir Foto</p>
                <input type="submit" name="subir" id="btn_enviar" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FotoPerfil;