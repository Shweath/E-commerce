import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Shop from './pages/Shop';
import ShopCatagory from './pages/ShopCatagory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Footer from './components/Footer/Footer';
import men_banner from './components/assets/banner_mens.png';
import women_banner from './components/assets/banner_women.png';
import kid_banner from './components/assets/banner_kids.png';
import ShopContextProvider from './context/ShopContext';

const App = () => {
  const location = useLocation(); // Get current route
  const hideFooterRoutes = ["/cart"]; // Define routes where footer should be hidden

  return (
    <>
      <ShopContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCatagory banner={men_banner} category="men" />} />
          <Route path='/womens' element={<ShopCatagory banner={women_banner} category="women" />} />
          <Route path='/kids' element={<ShopCatagory banner={kid_banner} category="kid" />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>

        {/* Show Footer only if the route is NOT in hideFooterRoutes */}
        {!hideFooterRoutes.includes(location.pathname) && <Footer />}
      </ShopContextProvider>
    </>
  );
};

// Wrap App with BrowserRouter outside for useLocation to work
const RootApp = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default RootApp;
