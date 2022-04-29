import React, { useEffect, useState} from "react";
import Header from "../Header";
import Footer from "../Footer";
import PostIndividual from "./PostIndividual";

function Home() {
  
  const [posts , setPosts] = useState([]);

  useEffect( () =>{
    fetch("http://localhost:8000/api/post")
    .then((response) => response.json())
    .then((result) => setPosts(result));
  },[])

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

export default Home;
