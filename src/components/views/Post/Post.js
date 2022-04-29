import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Comentario from "./Comentario";
import { Link } from "react-router-dom";

const comentarios = [
  {
    id: 1,
    comentario: "Ta bueno",
    fecha: "18/09/1999",
    autor: "Davicho",
  },
  {
    id: 2,
    comentario: "Ta bueno 2",
    fecha: "18/09/1999",
    autor: "Josete",
  },
  {
    id: 3,
    comentario: "Ta bueno 3",
    fecha: "18/09/1999",
    autor: "Vickytoria",
  },
];


class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post:[] ,
    };
  }
 
  componentWillMount() {
    // const navigate = useNavigate();
    fetch("http://localhost:8000/api/post/"+this.props.id)
      .then((response) => response.json())
      .then((result) => this.setState({ post: result }));
  }

  render() {
    return (
      <div>
        <Header />
        {/* Inicio Container Comentarios */}
        <div className="container-comentarios mb-5">
          {/* Inicio noticia */}
          <div className="noticia p-3">  
            {/* Inicio Contenedor-footer */}
            <div className="container-footer">
              {/* Inicio Contenedor-Fecha Publi */}
              <div className="fechaPublicacion">{this.state.post.fechaPost}</div>
              {/* Fin Contenedor-Fecha Publi */}
              {/* Inicio Contenedor-Firma */}
              <div className="firma">{this.state.post.idUsuario}</div>
              {/* Fin Contenedor-Firma */}
            </div>
            {/* Si eres Dueño del post o Admin*/}
            <form
              action="/codigoapp/source/controller/controllerDeletePost.php"
              method="post"
            >
              <button
                className="btn btn-danger my-2"
                id="btnComentar"
                type="submit"
                name="eliminar"
                value="<?php echo $data[0]->ID_POST; ?>"
              >
                X
              </button>
            </form>
            <Link to={"edit"} className="btn btn-danger my-2">
              Modificar
            </Link>
            {/* Fin Contenedor-footer */}
            {/* Inicio Titulo noticia */}
            <h1 id="tNoticia">{this.state.post.titulo}</h1>
            {/* Fin Titulo noticia */}
            {/* Inicio Contenido noticia */}
            <p id="contenidoNoticia">{this.state.post.texto}</p>
            {/* Fin Contenido noticia */}
          </div>
          {/* Fin noticia */}
          {/* Añadir Comentario */}
          <form
            action="/codigoapp/source/controller/controllerSaveComentarios.php"
            method="POST"
          >
            <div className="formContent justify-content-center">
              <div className="my-2 col-5">
                <textarea
                  name="comentario"
                  className="form-control"
                  id="FormControlTextarea1"
                ></textarea>
              </div>
              <div className="button">
                <input hidden name="ID_POST" value="IDPOST" />
                <button
                  type="submit"
                  id="btnComentar"
                  className="btn btn-primary"
                >
                  Comentar
                </button>
              </div>
            </div>
          </form>
          {/* Fin Añadir Comentario */}
          {/* Inicio comentario */}
          {comentarios.map((comentario) => (
            <Comentario key={comentario.id} datos={comentario} />
          ))}
          {/* Fin comentario */}
        </div>
        {/* Fin Container Comentarios */}
        <Footer />
      </div>
    );
  }
}

export default Post;
