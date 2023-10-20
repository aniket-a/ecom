import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import CartItems from "./CartItem/CartItem"

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

                

                <>
                    <CartItems />
                    <div className="cart_footer">
                        <div className="subtotal">
                            <span className="text">SubTotal: </span>
                            <span className="text total">&#8377;1234</span>
                        </div>
                        <div className="button">
                            <button className="checkout">Checkout</button>
                        </div>
                    </div>
                </>
                     
            </div>
        </div>
    );
};

export default Cart;
