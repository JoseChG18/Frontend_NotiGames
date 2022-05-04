function Comentario(props) {
  return (
    <div className="comentario">
      <div className="card mb-2">
        <div className="card-header">
          {/* Si eres dueño o Admin */}
          <form
            action="/codigoapp/source/controller/controllerDeleteComentario.php"
            className="float-end"
            method="post"
          >
            <input
              hidden
              type="text"
              name="idPost"
            />
            <button
              className="btn btn-danger my-2"
              id="btnComentar"
              type="submit"
              name="idComentario"
            >
              X
            </button>
          </form>

          <h5 className="pt-2">
            <strong>{props.datos.idUser}</strong>
          </h5>
        </div>
        <div className="card-body">
          <h5 className="card-title">{props.datos.comentario}</h5>
          <p className="card-text"></p>
          <span id="btnComentar" className="btn btn-primary">
            {props.datos.fechaComentario}
          </span>
        </div>
      </div>
    </div>
  );
}
export default Comentario;
