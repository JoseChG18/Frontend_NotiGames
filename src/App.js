// import logo from './logo.svg';
import "./App.css";
import Nav from "./Componentes/Nav/Nav";
import Footer from "./Componentes/Footer/Footer";
import Post from "./Componentes/Post/Post";

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
  // {
  //   id: 3,
  //   texto: "Este es el Texto 3",
  //   titulo: "Titulo de prueba 3",
  //   fecha: "18/09/1999",
  //   autor: "Yo mismo",
  // },
  // {
  //   id: 4,
  //   texto: "Este es el Texto 4",
  //   titulo: "Titulo de prueba 4",
  //   fecha: "18/09/1999",
  //   autor: "Yo mismo",
  // },
  // {
  //   id: 5,
  //   texto: "Este es el Texto 5",
  //   titulo: "Titulo de prueba 5",
  //   fecha: "18/09/1999",
  //   autor: "Yo mismo",
  // },
  // {
  //   id: 6,
  //   texto: "Hola",
  //   titulo: "Titulo de prueba 5",
  //   fecha: "18/09/1999",
  //   autor: "Yo mismo",
  // },
];

const usuario = {
  nombre: "David",
};

function App() {
  let datos = posts.map((post) => <Post key={post.id} datos={post} />);

  return (
    <div className="main">
      <Nav usuario={usuario} />
      {datos}
      <Footer />
    </div>
  );
}

export default App;
