import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Comentario from "./Comentario";

const post = {
  id: 1,
  texto:
    "Este es el Texto 1Este es el Texto 1Este es el Texto 1Este es el Texto 1Este es el Texto 1Este es el Texto 1Este es el Texto 1Este es el Texto 1Este es el Texto 1texto: Este es el Texto 1Este es el Texto 1Este es el Texto 1Este es el Texto 1Este es el Texto 1Este es el Texto 1Este es el Texto 1Este es el Texto 1Este es el Texto 1",
  titulo: "Titulo de prueba 1",
  fecha: "18/09/1999",
  autor: "Yo mismo",
};
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
    this.state = {};
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
              <div className="fechaPublicacion">{post.fecha}</div>
              {/* Fin Contenedor-Fecha Publi */}
              {/* Inicio Contenedor-Firma */}
              <div className="firma">{post.autor}</div>
              {/* Fin Contenedor-Firma */}
            </div>
            {/* Si eres Dueño del post o Admin
                <form action="/codigoapp/source/controller/controllerDeletePost.php" method="post">
                    <button className="btn btn-danger my-2" id="btnComentar" type="submit" name="eliminar" value="<?php echo $data[0]->ID_POST; ?>">X</button>
                </form>
                <form action="./modificarPost.php" method="post">
                    <input hidden type="text" name="titulo" value="<?php echo $data[0]->Titulo ?>" />
                    <input hidden type="text" name="texto" value="<?php echo $data[0]->texto ?>" />
                    <input hidden type="text" name="fechaPost" value="<?php echo $data[0]->fecha_Post ?>" />
                    <input hidden type="text" name="idPersona" value="<?php echo $data[0]->ID_Persona_Post ?>" />
                    <input hidden type="text" name="categoria" value="<?php echo $data[0]->ID_Categoria_Post ?>" />
                    <button className="btn btn-danger my-2" id="btnComentar" type="submit" name="idPost" value="<?php echo $data[0]->ID_POST; ?>">Modificar</button>
                </form> */}
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
