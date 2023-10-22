import "./Home.scss";
import Banner from "./Banner/Banner"
import Category from "../Home/Category/Category";
import Products from "../Products/Products";
import { fetchDataFromApi } from "../../utils/api";
import { useContext, useEffect } from "react";
import { Context } from "../../utils/context";
import { useLocation } from "react-router-dom";


const Home = () => {

    const location = useLocation()

    useEffect(()=>{
        window.scrollTo({top:0})
    },[location])

    const {category, setCategory, product, setProduct} = useContext(Context)

    useEffect(()=>{
        getCategories()
        getAllProducts()
    },[])

    const getCategories =()=>{
        fetchDataFromApi("/api/categories?populate=*")
        .then((res)=> setCategory(res) )
    }

    const getAllProducts = ()=>{
        fetchDataFromApi("/api/products?populate=*")
        .then(res=> {
    
            setProduct(res)
        })
    }
    
    return (
        <div>
            <Banner />
            <div className="main-content">
                <div className="layout">
                    <Category category={category} />
                    <Products product={product} headingText="Popular products"/>
                </div>
            </div>
                
        </div>
    );
};

export default Home;
