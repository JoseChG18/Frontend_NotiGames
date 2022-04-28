import React, { Component } from "react";
import EstadisticaCSGO from "./EstadisticaCSGO";
import EstadisticaLOL from "./EstadisticaLOL";
import EstadisticaRL from "./EstadisticaRL";
class Estadisticas extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="col-md-12">
        <div className="card text-center">
          <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              <button
                className="nav-link active"
                id="nav-lol-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-lol"
                type="button"
                role="tab"
                aria-controls="nav-lol"
                aria-selected="true"
              >
                League of Legends
              </button>
              <button
                className="nav-link"
                id="nav-cs-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-cs"
                type="button"
                role="tab"
                aria-controls="nav-cs"
                aria-selected="true"
              >
                Counter-Strike
              </button>
              <button
                className="nav-link"
                id="nav-rl-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-rl"
                type="button"
                role="tab"
                aria-controls="nav-rl"
                aria-selected="true"
              >
                Rocket League
              </button>
            </div>
          </nav>
          <div className="tab-content" id="nav-tabContent">
            <EstadisticaLOL/>
            <EstadisticaCSGO/>
            <EstadisticaRL/>
          </div>
        </div>
      </div>
    );
  }
}

export default Estadisticas;
