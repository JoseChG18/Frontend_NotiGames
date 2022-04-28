import React, { Component } from "react";

import Header from "../Header";
import Footer from "../Footer";
import PostIndividual from "./PostIndividual";

const posts = [
  {
    id: 1,
    texto:
      "Este es el Texto 1Este es el Texto 1Este es el Texto 1Este es el Texto 1Este es el Texto 1Este es el Texto 1Este es el Texto 1Este es el Texto 1Este es el Texto 1texto: Este es el Texto 1Este es el Texto 1Este es el Texto 1Este es el Texto 1Este es el Texto 1Este es el Texto 1Este es el Texto 1Este es el Texto 1Este es el Texto 1",
    titulo: "Titulo de prueba 1",
    fecha: "18/09/1999",
    autor: "Yo mismo",
  },
  {
    id: 2,
    texto: "Este es el Texto 2",
    titulo: "Titulo de prueba 2",
    fecha: "18/09/1999",
    autor: "Yo mismo",
  },
];

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        {posts.map((post) => (
          <PostIndividual key={post.id} datos={post} />
        ))}
        <Footer />
      </div>
    );
  }
}

export default Home;
