import React from 'react'
import './Header.css'
import SearchBar from '../SearchBar/SearchBar'
import CategoryFilter from '../CategoryFilter/CategoryFilter'

const Header = () => {
  return (
      <header className='header'>
      <div className='logo'>
        <h1>SPAR Grocery</h1>
      </div>
      <div className='header-center'>
        <SearchBar/>
        <CategoryFilter/>
      </div>
      
      <nav className='nav-links'>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/cart">Cart</a></li>
          <li><a href="/checkout">Checkout</a></li>
          <li><a href="/admin">Admin</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header