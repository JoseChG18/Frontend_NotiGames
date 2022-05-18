import React, { useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import "./Home.css";
import PostIndividual from "./PostIndividual";

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer 1|GnNHEjVzu4rKaSRfGG14lnFha7kO8qXTeEJ2RjIK"
    );

    let requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    fetch("http://localhost:8000/api/post", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setPosts(result);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div>
        <Header />
        <h1 className="text-center">Cargando...</h1>
        <Footer />
      </div>
    );
  } else {
    return (
      <div>
        <Header />
        <div className="grandContPosts">
          {posts.map((post) => (
            <PostIndividual key={post.id} datos={post} />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
