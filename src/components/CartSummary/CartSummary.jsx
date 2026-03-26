import React from 'react'
import './CartSummary.css'

const CartSummary = ({total}) => {
  return (
     <div className='cart-summary'>
      <h2 className='summary-title'>Order Summary</h2>

      <div className='summary-row'>
        <span>Total</span>
        <span className='summary-total'>${total}</span>
      </div>

      <button className='checkout-btn'>Proceed to Checkout</button>
    </div>
  )
}

export default CartSummary