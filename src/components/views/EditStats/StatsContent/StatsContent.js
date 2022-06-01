import React from "react";
import StatsInput from "./StatsInput";
function StatsContent(props) {
    return(
        <div
              className="tab-pane fade"
              id={"v-pills-" + props.id}
              role="tabpanel"
              aria-labelledby={"v-pills-" + props.id + "-tab"}
            >
              {props.stats.map((stat) => (
                (props.id === stat.pivot.game_id)?<StatsInput key={stat.id} datos={stat}/>:""
              ))}
            </div>
    )
}

export default StatsContent;