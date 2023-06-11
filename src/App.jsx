import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";
import Header from "./components/header/Header";
import Landing from "./components/landing/Landing";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
