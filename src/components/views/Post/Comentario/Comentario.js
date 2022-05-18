import "./Comentario.scss";

function Comentario(props) {
  console.log(props);

  const deleteComentario = () => {
    let requestOptions = {
      method: "DELETE",
      redirect: "follow",
    };

    fetch("http://localhost:8000/api/comment/" + props.datos.id, requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="comentario">
      <div className="card mb-2">
        <div className="card-header">
          {/* Si eres dueño o Admin */}
          <button
            onClick={() => deleteComentario()}
            className="btn btn-danger my-2 float-end"
            id="btnComentar"
            type="button"
            name="idComentario"
          >
            X
          </button>

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
