import React from 'react'
import './ProductList.css'
import ProductCard from '../ProductCard/ProductCard'

const ProductList = ({products}) => {
  return (
    <div className='product-list'>
      {products && products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p className='no-products'>No products available</p>
      )}
    </div>
  )
}

export default ProductList