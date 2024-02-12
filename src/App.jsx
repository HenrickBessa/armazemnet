import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import ProductPage from "./pages/ProductPage";
import AboutPage from "./pages/About/AboutPage";
const App = () => {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<MainSection />} />
          <Route path="/produtos" element={<ProductPage />} />
          <Route path="/sobre" element={<AboutPage/>}/>
        </Routes>
      </>
    </Router>
  );
}

export default App;
