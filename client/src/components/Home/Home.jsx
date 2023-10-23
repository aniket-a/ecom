import "./Home.scss";
import Banner from "./Banner/Banner"
import Category from "../Home/Category/Category";
import Products from "../Products/Products";
import { fetchDataFromApi } from "../../utils/api";
import { useContext, useEffect } from "react";
import { Context } from "../../utils/context";

const Home = () => {

    const {category, setCategory} = useContext(Context)

    useEffect(()=>{
        getCategories()
    },[])

    const getCategories =()=>{
        fetchDataFromApi("/api/categories?populate=*")
        .then((res)=> setCategory(res) )
    }
    
    return (
        <div>
            <Banner />
            <div className="main-content">
                <div className="layout">
                    <Category category={category} />
                    <Products headingText="Popular products"/>
                </div>
            </div>
                
        </div>
    );
};

export default Home;
