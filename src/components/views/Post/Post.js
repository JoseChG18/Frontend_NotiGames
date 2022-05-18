import "../Post/Post.scss";
import React, { useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Comentario from "./Comentario";
import { Link, useParams } from "react-router-dom";

function Post() {

  const [isLoading, setIsLoading] = useState(true);

  const id = useParams().id;

  const [comentarios, setComentarios] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/api/comentario")
      .then((response) => response.json())
      .then((result) => setComentarios(result));
  }, []);

  const [comentario, setComentario] = useState("");

  const onChangeComentario = (e) => {
    setComentario(e.target.value);
  };

  const crearComentario = () => {
    var formdata = new FormData();
    formdata.append("comentario", comentario);
    formdata.append("idPost", id);
    formdata.append("idUser", "1");
    let requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch("http://localhost:8000/api/comentario", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        // setComentarios(result);
        console.log(result);
      });
  };

  const [post, setPost] = useState(null);
  useEffect(() => {
    fetch("http://localhost:8000/api/post/" + id)
      .then((response) => response.json())
      .then((result) => {
        setPost(result);
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return (
      <div>
        <Header />
        <h1 className="text-center">Cargando...</h1>
        <Footer />
      </div>
    );
  } else {
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
              <div className="fechaPublicacion">{post.fechaPost}</div>
              {/* Fin Contenedor-Fecha Publi */}
              {/* Inicio Contenedor-Firma */}
              <div className="firma">{post.idUsuario}</div>
              {/* Fin Contenedor-Firma */}
            </div>
            {/* Si eres Dueño del post o Admin*/}
            <form
              action={"https://localhost:8000/post/" + id + "/eliminar"}
              method="post"
              className="d-inline"
            >
              <button
                className="btn btn-danger my-2"
                id="btnComentar"
                type="submit"
              >
                X
              </button>
            </form>
            <Link to={"edit"} className="btn btn-danger my-2">
              Modificar
            </Link>
            {/* Fin Contenedor-footer */}
            {/* Inicio Titulo noticia */}
            <h1 id="tNoticia">{post.titulo}</h1>
            {/* Fin Titulo noticia */}
            {/* Inicio Contenido noticia */}
            <p id="contenidoNoticia">{post.texto}</p>
            {/* Fin Contenido noticia */}
          </div>
          {/* Fin noticia */}
          {/* Añadir Comentario */}
          <form onSubmit={crearComentario}>
            <div className="formContent justify-content-center">
              <div className="my-2 col-5">
                <textarea
                  name="comentario"
                  className="form-control"
                  id="FormControlTextarea1"
                  value={comentario}
                  onChange={onChangeComentario}
                ></textarea>
              </div>
              <div className="button">
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
