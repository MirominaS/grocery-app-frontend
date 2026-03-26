import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ProductList from '../../components/ProductList/ProductList'

const Home = () => {
     const products = [
    {
      id: 1,
      name: "Apple",
      price: 120,
      category: "Fruits",
      image_url: "/placeholder.png"
    },
    {
      id: 2,
      name: "Milk",
      price: 0.8,
      category: "Dairy",
      image_url: "/placeholder.png"
    },
    {
      id: 3,
      name: "Bread",
      price: 1.0,
      category: "Bakery",
      image_url: "/placeholder.png"
    }
  ];
  return (
    <div className='home'>
        <Header/>

        <div className='home-content'>
            <h2 className='home-title'>Products</h2>
            <ProductList products={products}/>
        </div>
    </div>
  )
}

export default Home