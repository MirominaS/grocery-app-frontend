import React from 'react'
import './CheckoutPage.css'
import Header from '../../components/Header/Header';
import Checkout from '../../components/Checkout/Checkout';
import CartSummary from '../../components/CartSummary/CartSummary';
const CheckoutPage = () => {
    const cartItems = [
    {
      id: 1,
      name: "Apple",
      price: 120,
      quantity: 2
    },
    {
      id: 2,
      name: "Milk",
      price: 0.8,
      quantity: 1
    }
  ];
   const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className='checkout-page'>
      <Header />

      <div className='checkout-container'>
        <Checkout />
        <CartSummary total={total} />
      </div>
    </div>
  )
}

export default CheckoutPage