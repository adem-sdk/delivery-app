import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import Alinav from "./components/Navbar/Alinav";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <Alinav />
      <div className="main-app">
        <Navbar setShowLogin={setShowLogin} />
        <div className="app">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/order" element={<PlaceOrder />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
