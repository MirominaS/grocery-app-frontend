import React from 'react'
import './Checkout.css'

const Checkout = () => {
  return (
    <div className='checkout-form'>
      <h2 className='form-title'>Checkout</h2>

      <form>
        <div className='form-group'>
          <label>Customer Name</label>
          <input type="text" placeholder="Enter your name" />
        </div>

        <div className='form-group'>
          <label>Phone Number</label>
          <input type="text" placeholder="Enter your phone number" />
        </div>

        <div className='form-group'>
          <label>Delivery Address</label>
          <textarea placeholder="Enter your address"></textarea>
        </div>

        <button type="submit" className='place-order-btn'>
          Place Order
        </button>
      </form>
    </div>
  )
}

export default Checkout