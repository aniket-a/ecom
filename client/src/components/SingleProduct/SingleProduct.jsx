import RelatedProducts from "./RelatedProducts/RelatedProducts";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPinterest,
    FaCartPlus,
} from "react-icons/fa";
import prod from "../../assets/products/earbuds-prod-1.webp"

import "./SingleProduct.scss";

const SingleProduct = () => {
    return(
        <div className="single_product_main_content">
            <div className="layout">
                <div className="single_product_page">
                    <div className="left">
                        <img src={prod} alt="" />
                    </div>

                    <div className="right">
                        <div className="name">product name</div>
                        <div className="price">&#8377;499/-</div>
                        <div className="desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque nisi aspernatur deleniti accusamus tenetur ipsum perferendis, asperiores ullam nam veniam quasi fuga aperiam ut quam assumenda consectetur rerum unde iure?</div>

                        <div className="cart_buttons">
                            <div className="quantity_buttons">
                                <span className="span">-</span>
                                <span className="span">5</span>
                                <span className="span">+</span>
                            </div>
                            <button className="add_to_cart_button"><FaCartPlus size={20} />  ADD TO CART</button>
                        </div>

                        <span className="divider" />    
                        
                        <div className="info_items">
                        
                            <span className="text_bold">
                                Category:<span>Headphones</span>
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

                <RelatedProducts />
            </div>
        </div>
    );
};

export default SingleProduct;
