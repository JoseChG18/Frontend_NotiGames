import React, { Component } from "react";
import Vermas from "./Vermas/Vermas";
import "./Post.css";

class Post extends Component {
  state = {
    flecha: true,
  };

  cambioFlecha = () => {
    this.setState({ flecha: !this.state.flecha });
  };

  render() {
    return (
      // Inicio Contenedor Noticias
      <div className="containerNoticia">
        {/* Inicio Contenedor Mensajes del Foro  */}
        <div className="mensajeForo">
          <div className="titulo text-center">
            <a href="./comentarioNoticias.php?ID_POST=<?php echo $value->ID_POST ?>">
              {this.props.datos.titulo}
            </a>
          </div>
          {/* Inicio Cuerpo del Mensaje Foro */}
          <div
            className={
              this.state.flecha ? "contenido hidden" : "contenido show"
            }
          >
            {this.props.datos.texto}
          </div>
          {/* Fin Cuerpo del Mensaje Foro */}

          {/* Inicio Flecha ver mas */}
          <div className="vermas">
            <span
              onClick={() => this.cambioFlecha()}
              id={this.state.flecha ? "mas" : "menos"} // mas || menos
              data-dir={this.state.flecha ? "down" : "up"} // down || up
              className={this.state.flecha ? "arrow down" : "arrow up"} // down || arrow up
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-caret-down-square-fill"
                viewBox="0 0 16 16"
              >
                <Vermas estado={this.state.flecha} />
              </svg>
            </span>
          </div>
          {/* Fin Flecha ver mas */}

          {/* Inicio Contenedor-footer */}
          <div className="container-footer">
            {/* Inicio Contenedor-Fecha */}
            <div className="fechaPublicacion">{this.props.datos.fecha}</div>
            {/* Fin Contenedor-Fecha */}

            {/* Inicio Contenedor-Firma */}
            <div className="firma">{this.props.datos.autor}</div>
            {/* Fin Contenedor-Firma */}
          </div>
          {/* Fin Contenedor-footer */}
        </div>
        {/* Fin Contenedor Mensajes del Foro */}
      </div>
      // Fin Contenedor Noticias
    );
  }
}
export default Post;
