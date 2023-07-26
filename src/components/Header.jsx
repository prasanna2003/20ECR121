import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
  const cardStyle = {
    textDecoration: 'none',
    textAlign: 'center'
  };
  
  return (
    <div>
      <nav>
      <ul className='d-flex cont'>
        <li><Link to='/about' style={cardStyle}><a>About</a></Link></li>
        <li><Link to='/product'><a>Product</a></Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
