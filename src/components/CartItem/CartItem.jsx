import React from 'react'
import './CartItem.css'

const CartItem = ({item}) => {
  return (
    <div className='cart-item'>
      <img
        src={item.image_url || "/placeholder.png"}
        alt={item.name}
        className='cart-item-image'
      />

      <div className='cart-item-details'>
        <h3 className='cart-item-name'>{item.name}</h3>
        <p className='cart-item-price'>${item.price}</p>
      </div>

      <div className='cart-item-quantity'>
        <button className='qty-btn'>-</button>
        <span className='qty-value'>{item.quantity}</span>
        <button className='qty-btn'>+</button>
      </div>

      <button className='remove-btn'>Remove</button>
    </div>
  )
}

export default CartItem