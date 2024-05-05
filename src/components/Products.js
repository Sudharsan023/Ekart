import React from 'react';

const Products = ({product, cart, setCart}) => {
const addCart = () =>{
  setCart([...cart, product]);
};
const removeCart = () =>{
  setCart(cart.filter((c) =>c.id!== product.id));
};
  return (
    <div className='pdt'>
       <div className="img">
         <img src={product.imageUrl} alt='image' className='img1' />
       </div>
        <div className="details">
       <p className='pdname'>{product.name}</p>
       <p>Price Rs:{product.price} /-</p>
       {cart.includes(product)?(
         <button className='btnremove' onClick={removeCart}>Remove from Cart</button>):(
         <button onClick={addCart}>Add to Cart</button>)
      }
         </div>
    </div>
  )
}

export default Products;