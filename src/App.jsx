import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
