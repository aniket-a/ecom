import React, { useEffect } from 'react'
import "./Category.scss"
import Products from '../Products/Products'
import { useLocation, useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import { fetchDataFromApi } from '../../utils/api'


const Category = () => {

  const location = useLocation()

  useEffect(()=>{
    window.scrollTo({top:0})
  },[location])

  
  
  const {id} = useParams()

  const {data} = useFetch(`/api/products?populate=*&[filters][categories][id]=${id}`)
  console.log(data, "aniket")

  return (
    <div className='category_main_content'>
        <div className="layout">
            <div className="category_title">{data?.data[0]?.attributes?.categories?.data[0]?.attributes?.title
}</div>
            <Products innerpage={true} product={data}/>
        </div>
    </div>
  )
}

export default Category
