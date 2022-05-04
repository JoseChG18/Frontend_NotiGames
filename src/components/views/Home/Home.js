import React, { useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import PostIndividual from "./PostIndividual";

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/api/post")
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
        {posts.map((post) => (
          <PostIndividual key={post.id} datos={post} />
        ))}
        <Footer />
      </div>
    );
  }
}

export default Home;
