import React from "react";
import "./EditPost.scss";
import Header from "../Header";
import Footer from "../Footer";
import { Link, useParams } from "react-router-dom";

function EditPost() {
  const id = useParams().id;

  return (
    <div className="m-0 row justify-content-center">
      <Header />
      <form action="" method="post" className="container p-3 mt-4">
        <div className="mb-3 col-md-12">
          <label htmlFor="tituloNoticia" className="form-label">
            Titulo:{" "}
          </label>
          <input
            name="titulo"
            type="text"
            className="form-control"
            value="TituloA"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cuerpoNoticia" className="form-label">
            Cuerpo:{" "}
          </label>
          <textarea name="texto" className="form-control" rows="3">
            Texto Post
          </textarea>
        </div>
        <label htmlFor="idcategoria" className="form-label">
          Categoria:
        </label>
        <select
          className="form-select mb-3"
          aria-label="Default select example"
          name="idcategoria"
        >
          <option selected value="<?php echo $categoria->ID_Categoria ?>">
            CategoriaA
          </option>

          <option value="<?php echo $categoria->ID_Categoria ?>">
            Categorias a Seleccionar
          </option>
        </select>
        <div className="mb-3 col-md-12">
          <label htmlFor="fechaPost" className="form-label">
            Fecha Post:{" "}
          </label>
          <input
            className="form-control"
            type="datetime"
            name="fechaPost"
            value="FechaA"
          />
        </div>
        <div className="mb-3 col-md-12">
          <label htmlFor="idPersona" className="form-label">
            Identificador Dueño:{" "}
          </label>
          <input
            className="form-control"
            type="text"
            name="idPersona"
            value="UserA"
          />
        </div>

        <button
          name="modificar"
          type="submit"
          className="btn btn-outline-success mt-2 mx-1 float-end"
        >
          Modificar
        </button>
        <Link to={"/post/" + id}
          className="btn btn-outline-danger mt-2 mx-1 float-end">Cancelar</Link>
      </form>
      <Footer />
    </div>
  );
}

export default EditPost;
