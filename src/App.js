import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Header from "./components/Header";
import AddBlog from "./pages/AddBlog";
import AddCategory from "./pages/AddCategory";
import SingleBlog from "./pages/SingleBlog";
import ProtectedRoutes from "./Services/ProtectedRoutes";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>

        {/* protected routes */}
        <Route path="/" element={<ProtectedRoutes />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/add-blog" element={<AddBlog />}></Route>
          <Route path="/add-category" element={<AddCategory />}></Route>
          <Route path="/blog/:id" element={<SingleBlog />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
