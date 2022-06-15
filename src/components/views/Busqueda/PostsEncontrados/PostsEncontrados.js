import React from "react";
import { Link } from "react-router-dom";

const PostsEncontrados = (props) => {
  return (
    <div className="card">
      <h5 className="card-header">{props.datos.tittle}</h5>
      <div className="card-body">
        {/* <h5 className="card-title">{props.datos.tittle}</h5> */}
        <p className="card-text">{props.datos.description}</p>
        <Link to={"/post/" + props.datos.id} className="btn btn-primary">
          Ir al Post
        </Link>
      </div>
    </div>
  );
};

export default PostsEncontrados;
