import React, { useState } from "react";
import Vermas from "./Vermas";
import "./PostIndividual.css";
import { Link } from "react-router-dom";

function PostIndividual(props) {
  const [flecha, cambioFlecha] = useState(true);

  return (
    // Inicio Contenedor Noticias
    <div className="containerNoticia">
      {/* Inicio Contenedor Mensajes del Foro  */}
      <div className="mensajeForo">
        <div className="titulo text-center">
          <Link
            to={"/post/" + props.datos.id}
            state={{ id: props.datos.id }}
          >
            {props.datos.titulo}
          </Link>
        </div>
        {/* Inicio Cuerpo del Mensaje Foro */}
        <div
          className={flecha ? "contenido hidden" : "contenido show"}
        >
          {props.datos.texto}
        </div>
        {/* Fin Cuerpo del Mensaje Foro */}

        {/* Inicio Flecha ver mas */}
        <div className="vermas">
          <span
            onClick={() => cambioFlecha(!flecha)}
            id={flecha ? "mas" : "menos"} // mas || menos
            data-dir={flecha ? "down" : "up"} // down || up
            className={flecha ? "arrow down align-self-end" : "arrow up align-self-end"} // down || arrow up
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-caret-down-square-fill"
              viewBox="0 0 16 16"
            >
              <Vermas estado={flecha} />
            </svg>
          </span>
        </div>
        {/* Fin Flecha ver mas */}

        {/* Inicio Contenedor-footer */}
        <div className="container-footer">
          {/* Inicio Contenedor-Fecha */}
          <div className="fechaPublicacion">{props.datos.fechaPost}</div>
          {/* Fin Contenedor-Fecha */}

          {/* Inicio Contenedor-Firma */}
          <div className="firma">{props.datos.idUsuario}</div>
          {/* Fin Contenedor-Firma */}
        </div>
        {/* Fin Contenedor-footer */}
      </div>
      {/* Fin Contenedor Mensajes del Foro */}
    </div>
    // Fin Contenedor Noticias
  );
}

export default PostIndividual;
