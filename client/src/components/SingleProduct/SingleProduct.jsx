import RelatedProducts from "./RelatedProducts/RelatedProducts";
import {FaFacebookF,FaTwitter,FaInstagram,FaLinkedinIn,FaPinterest,FaCartPlus} from "react-icons/fa";
import "./SingleProduct.scss";
import useFetch from "../../hooks/useFetch"
import { useParams } from "react-router-dom";
import { useState, useContext } from "react";
import { Context } from "../../utils/context";


const SingleProduct = () => {

    const {handleAddToCart} = useContext(Context)

    const [quantity, setquantity] = useState(1)

    const {id} = useParams()
    const {data} = useFetch(`/api/products?populate=*&[filters][id]=${id}`)

    function increament(){
        setquantity(prevState=> prevState + 1)
    }

    function decrement(){
        setquantity(prevState => {
            if(prevState === 1 ) return 1
            return prevState - 1
        })
    }

    return(
        <div className="single_product_main_content">
            <div className="layout">
                <div className="single_product_page">
                    <div className="left">
                        <img src={import.meta.env.VITE_REACT_APP_DEV_URL + data?.data[0]?.attributes?.img?.data[0].attributes?.url} alt="" />
                    </div>

                    <div className="right">
                        <div className="name">{data?.data[0]?.attributes?.title}</div>
                        <div className="price">&#8377;{data?.data[0]?.attributes?.price}/-</div>
                        <div className="desc">{data?.data[0]?.attributes?.desc}</div>

                        <div className="cart_buttons">
                            <div className="quantity_buttons">
                                <span className="span" onClick={decrement} >-</span>
                                <span className="span">{quantity}</span>
                                <span className="span" onClick={increament}>+</span>
                            </div>
                            <button className="add_to_cart_button" onClick={()=> {
                                handleAddToCart(data?.data[0], quantity)
                                setquantity(1)
                            }}><FaCartPlus size={20} />  ADD TO CART</button>
                        </div>

                        <span className="divider" />    
                        
                        <div className="info_items">
                        
                            <span className="text_bold">
                                Category : <span>{data?.data[0]?.attributes?.categories?.data[0]?.attributes?.title}</span>
                            </span>

                            <span className="text_bold">
                                Share: <span className="social_icons">
                                            <FaFacebookF size={20}/>
                                            <FaTwitter size={20}/>     
                                            <FaInstagram size={20}/>     
                                            <FaLinkedinIn size={20}/>     
                                            <FaPinterest size={20}/>     
                                       </span>
                            </span>
                            
                        </div>

                    </div>
                </div>

                <RelatedProducts productId={id} categoryId={data?.data[0]?.attributes?.categories?.data[0]?.id} />
            </div>
        </div>
    );
};

export default SingleProduct;
