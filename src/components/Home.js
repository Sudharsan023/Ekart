import React from 'react'
import data from '../assets/data.json';
import '../App.css'
import Products from './Products';
import { useState, useEffect } from 'react';
 const Home = ({cart, setCart}) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(data);
  }, []);
  return (
    <div className="procontainer">
        {products.map((product) => (
             <Products key={product.id} product={product} cart={cart} setCart={setCart} />
        ))}
    </div>
  );
 }
export default Home;
