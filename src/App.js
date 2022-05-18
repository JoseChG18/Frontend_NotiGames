import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/views/Login";
import Profile from "./components/views/Profile";
import Home from "./components/views/Home";
import Post from "./components/views/Post";
import Register from "./components/views/Register";
import EditProfile from "./components/views/EditProfile";
import EditPost from "./components/views/EditPost";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="post/:id" element={<Post />} />
        <Route path="post/:id/edit" element={<EditPost />} />
        <Route path="profile/:id" element={<Profile />} />
        <Route path="profile/:id/edit" element={<EditProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
