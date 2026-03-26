import React from 'react'
import './Cart.css'
import Header from '../../components/Header/Header';
import CartItem from '../../components/CartItem/CartItem';
import CartSummary from '../../components/CartSummary/CartSummary';

const Cart = () => {
    const cartItems = [
    {
      id: 1,
      name: "Apple",
      price: 120,
      quantity: 2,
      image_url: "/placeholder.png"
    },
    {
      id: 2,
      name: "Milk",
      price: 0.8,
      quantity: 1,
      image_url: "/placeholder.png"
    }
  ];

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  
  return (
    <div className='cart-page'>
      <Header />

      <div className='cart-container'>
        <div className='cart-items-section'>
          <h2 className='cart-title'>My Cart</h2>

          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))
          ) : (
            <p className='empty-cart'>Your cart is empty</p>
          )}
        </div>

        <CartSummary total={total} />
      </div>
    </div>
  )
}

export default Cart