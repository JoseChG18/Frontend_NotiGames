import "./Comentario.scss";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function Comentario(props) {
  const idPost = useParams("id").id;
  console.log(idPost)
  const navigate = useNavigate();
  // FALTA RECARGAR PAGINA PARA APLICAR CAMBIOS / FALTA IMPLEMENTAR
  const deleteComentario = () => {
    axios.delete("api/comment/"+props.datos.id).then((response) => {
      if (response.data.status === 200) {
        navigate(`/post/${idPost}`);
      }
    })
  };

  let propietario = "";
    if(props.datos.user_id === JSON.parse(localStorage.getItem("user")).id){
      propietario = (
        <button
          onClick={deleteComentario}
          className="btn btn-danger my-2 float-end"
          id="btnComentar"
          type="button"
        >
          X
        </button>
      )
    }
    
  

  return (
    <div className="comentario">
      <div className="card mb-2">
        <div className="card-header">
          {/* Si eres dueño o Admin */}
          { propietario }

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
