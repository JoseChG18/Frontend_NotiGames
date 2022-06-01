import React from "react";

function StatInput(props) {
  return (
    <div className="inputsStats">
      <input type={"text"} defaultValue={props.datos.name} />
      {"=>"}
      <input type={"text"} defaultValue={props.datos.value} />{" "}
      <button>Modificar</button>
      <button>Eliminar</button>
    </div>
  );
}

export default StatInput;
