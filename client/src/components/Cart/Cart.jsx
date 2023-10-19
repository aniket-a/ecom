import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";

import "./Cart.scss";
const Cart = ({setshowCart}) => {
    return(
        <div className="cart_panel">
            <div className="opac_layer"></div>
            <div className="cart_content">

                <div className="cart_header">
                    <div className="heading">Shopping Cart</div>
                    <div className="close_btn" onClick={()=> setshowCart(false)}>
                        <MdClose />
                        <span className="text">Close</span>
                    </div>
                </div>

                <div className="empty_cart">
                    <BsCartX />
                    <span>No Products In The Cart</span>
                    <button className="return-cta">Return To Shop</button>
                </div>
                
            </div>
        </div>
    );
};

export default Cart;
