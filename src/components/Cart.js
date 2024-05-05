import React, { useState , useEffect} from 'react'


const Cart = ({cart, setCart}) => {
  const[total, setTotal] = useState(0);

 
   useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + parseInt(curr.price), 0));
   }, [cart])

   if(!cart ||  cart.length === 0){
    return <div><p className="empty">Your cart is empty!</p>
    <img  className="catimg" src='https://static7.depositphotos.com/1000291/676/i/450/depositphotos_6768600-stock-photo-british-shorthair-kitten-cat-isolated.jpg'></img>
    </div>
    }
  return (
    <>
       <div className='cart-container'>
        
              {cart.map((product) => (
                <div className="cart-product" key={product.id}>
                  <div className='cart-img'>
                    <img src={product.imageUrl} alt="image" />
                  </div>
                  <div className='cart-product-details'>
                    <h3>{product.name}</h3>
                    <p>Price Rs:{product.price}</p>
                  </div>
                </div>
              ))}
           </div><br></br>

      <h2 className='cart-total'>Total Amount Rs:{total}</h2>
    </>
    
  )
}

export default Cart