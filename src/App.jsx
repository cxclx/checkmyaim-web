import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

import "./App.scss";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Profile from "./components/profile/Profile";
import Mesh from "./components/mesh/Mesh";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
      <Mesh />
    </Router>
  );
}

export default App;
