
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header.js'
import Cart from './components/Cart.js';
import Home from './components/Home.js';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);
  return (
    <div className='App'>
    <BrowserRouter>
      <Header cart={cart}/>
      <div className='container'>
        <Routes>
           <Route path="/Home" element={<Home cart={cart} setCart={setCart} />} /> 
          <Route path="/Cart" element={<Cart cart={cart} setCart={setCart}/>} />
        </Routes>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
