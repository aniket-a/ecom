import React from 'react'
import "./Category.scss"
import Products from '../Products/Products'
const Category = () => {
  return (
    <div className='category_main_content'>
        <div className="layout">
            <div className="category_title">Category Title</div>
            <Products innerpage={true}/>
        </div>
    </div>
  )
}

export default Category
