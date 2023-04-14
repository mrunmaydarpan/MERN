import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./Component/Pages/Home";
import Seller from "./Component/Pages/Seller";
import Cart from "./Component/Pages/Cart/Cart";
import PageNotFound from "./Component/Pages/PageNotFound";
import Login from "./Component/Pages/AuthPages/Login";
import Product from "./Component/Products/Product";
// import ProductContext from "./Api/ProductContext";
import Store from './Redux/Store/Store'
import { Provider } from "react-redux";

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={Store}>
        {/* <ProductContext> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path='product/:name' element={<Product />}></Route>
          <Route path='/seller' element={<Seller />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
        {/* </ProductContext> */}
      </Provider>
    </BrowserRouter>
  )
}

export default App;