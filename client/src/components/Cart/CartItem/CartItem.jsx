import "./CartItem.scss";
import { MdClose } from "react-icons/md";
import { useContext } from "react";
import { Context } from "../../../utils/context";
const CartItem = () => {

    const { cartItems , handleRemoveToCart, handleProductCartQuantity } = useContext(Context)
    
    

    return (
        <div className="cart_products">
            {
                cartItems.map((product) => {
                    return(
                        <div className="cart_product" key={product.id}> 

                        <div className="img_container">
                            <img src={import.meta.env.VITE_REACT_APP_DEV_URL + product?.attributes?.img?.data[0]?.attributes?.url } alt="" />
                        </div>

                        <div className="prod_details">
                            <div className="name">{product?.attributes?.title}</div>
                            <MdClose className="close_btn" onClick={()=> handleRemoveToCart(product)} />

                            <div className="quantity_btns">
                                <span onClick={()=> handleProductCartQuantity('dec', product)}>-</span>
                                <span>{product?.attributes?.quantity}</span>
                                <span onClick={()=> handleProductCartQuantity('inc', product)}>+</span>
                            </div>

                            <div className="text">
                                <span>{product?.attributes?.quantity} </span>
                                <span>x </span>
                                <span>&#8377; {product?.attributes?.price * product?.attributes?.quantity }</span>
                            </div>

                        </div>

                    </div>
                    )
                })
            }
        </div>
    );
};

export default CartItem;
