import React from 'react'
import './CategoryFilter.css'

const CategoryFilter = () => {
  return (
 <div className='category-filter'>
      <select className='category-select'>
        <option value="">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
        <option value="Bakery">Bakery</option>
      </select>
    </div>
  )
}

export default CategoryFilter