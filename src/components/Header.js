import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import { FaShoppingCart , FaHome, FaApple} from 'react-icons/fa';

const Header = ({cart}) => {
  return (
    <div className='header'>
        <h1><FaApple className='apple'/></h1>
           <input type='text' placeholder='Search Mkart.in'></input>
           <div className="navbar">
           <ul>
              <li><Link to={"/Home"}><FaHome className='icons'/></Link></li>
              <li><Link to={"/Cart"}><FaShoppingCart className='icons'/><span className='cart-count'>{cart.length}</span></Link></li> 
          </ul>
        </div>
    </div>
  )
}
export default Header