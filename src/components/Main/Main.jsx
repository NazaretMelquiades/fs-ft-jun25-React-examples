import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import TravelList from "./TravelList";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import NotFound from "./NotFound";
import Staff from "./Staff";
import Topic from "./Topic";
import WishList from "./WishList";
import ProductDetail from "./ProductDetail";

const Main = () => {
  return (
    <main>
      Main
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/travel" element={<TravelList/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/topic" element={<Topic/>} />
        <Route path="/wishlist" element={<WishList/>} />
        <Route path="/product/:id" element={<ProductDetail/>} />
        <Route path="/*" element={<NotFound/>} />
      </Routes>
    </main>
  );
};

export default Main;
