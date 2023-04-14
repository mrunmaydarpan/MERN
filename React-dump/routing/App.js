import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./Component/Pages/Home";
import Seller from "./Component/Pages/Seller";
import Cart from "./Component/Pages/Cart/Cart";
import PageNotFound from "./Component/Pages/PageNotFound";


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path='/seller' element={<Seller />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;