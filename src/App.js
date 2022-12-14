import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { NavBar, Cart, ProductList, Home, Alert } from './components';
import { navLinkStyle } from './theme';
import { useEffect } from 'react';
import CartContext from './CartContext';
import './App.css';
import useCart from './utility/useCart';
import cartSubs from './utility/cartSubs';
import routines from './utility/routines';

function App() {
  const cartHook = useCart([]);
  let { cart } = cartHook;
  
  useEffect(() => {
    cartSubs(cartHook);
    routines.cart();
  }, []);

  return (
    <BrowserRouter>
      <NavBar>
        <Link style={navLinkStyle} to="/">Home</Link>
        <Link style={navLinkStyle} to="products">Products</Link>
        <Link style={navLinkStyle} to="cart">Cart</Link>
      </NavBar>
      <CartContext.Provider value={cart}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartContext.Provider>
      <Alert />
    </BrowserRouter>
  );
}

export default App;
