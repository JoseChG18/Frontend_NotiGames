import React from "react";

function EstadisticaJuego(props) {
  return (
    <div className="row g-3 align-items-center p-1">
      <div className="col-3">{props.datos.name + " : "}</div>
      <div className="col-6">{props.datos.value}</div>
    </div>
  );
}

export default EstadisticaJuego;
