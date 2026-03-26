import React, { useEffect, useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ProductList from '../../components/ProductList/ProductList'
import { getProducts } from '../../api/productApi'

const Home = () => {

  const [products, setProducts] = useState([])
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("")

  useEffect(() => {
    fetchProducts()
  },[search,category])

  const fetchProducts = async () => {
    const res = await getProducts(search,category)
    if (res && res.success) {
      setProducts(res.data)
    }
  }
  return (
    <div className='home'>
        <Header setSearch={setSearch} setCategory={setCategory}/>

        <div className='home-content'>
            <h2 className='home-title'>Products</h2>
            <ProductList products={products}/>
        </div>
    </div>
  )
}

export default Home