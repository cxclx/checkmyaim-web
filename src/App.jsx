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
import Redirect from "./components/redirect/Redirect";
import Software from "./pages/software/Software";
import Premium from "./pages/premium/Premium";
import Contact from "./pages/contact/Contact";
import Imprint from "./pages/imprint/Imprint";
import Tos from "./pages/tos/Tos";
import PrivacyPolicy from "./pages/privacy-policy/PrivacyPolicy";
import RefundPolicy from "./pages/refund-policy/RefundPolicy";
import NotFound from "./pages/404/NotFound";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app" element={<Software />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/redirect" element={<Redirect />} />
        <Route path="/imprint" element={<Imprint />} />
        <Route path="/tos" element={<Tos />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <Mesh />
    </Router>
  );
}

export default App;
