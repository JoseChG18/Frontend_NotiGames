import "./Comentario.scss";

function Comentario(props) {

  const deleteComentario = () => {
    props.onDelete(props.datos.id);
  };

  const id_user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")).id : "";

  return (
    <div className="comentario">
      <div className="card mb-2">
        <div className="card-header">
          {/* Si eres dueño o Admin */}
          {props.datos.user_id === id_user && (
            <button
              onClick={deleteComentario}
              className="btn btn-danger my-2 float-end"
              id="btnComentar"
              type="button"
            >
              X
            </button>
          )}
          <h5 className="pt-2">
            <strong>{props.datos.user_id}</strong>
          </h5>
        </div>
        <div className="card-body">
          <h5 className="card-title">{props.datos.comment}</h5>
          <p className="card-text"></p>
          <span id="btnComentar" className="btn btn-primary">
            {props.datos.created_at}
          </span>
        </div>
      </div>
    </div>
  );
}
export default Comentario;
