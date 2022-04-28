import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./components/views/Login";
import Profile from "./components/views/Profile";
import Home from "./components/views/Home";
import Post from "./components/views/Post";

function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="login" element={<Login/>} />
          <Route path="post/:post_id" element={<Post/>}/>
          <Route path="profile" element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
