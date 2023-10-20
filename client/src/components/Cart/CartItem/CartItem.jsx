import "./CartItem.scss";
import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/earbuds-prod-1.webp"

const CartItem = () => {
    return(
        <div className="cart_products">
            <div className="cart_product">

                <div className="img_container">
                    <img src={prod} alt="" />
                </div>

                <div className="prod_details">
                    <div className="name">product Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus at eius recusandae porro odio molestias nemo, nihil aperiam quas quia! Maiores fugiat vero eligendi quod. Repellat quam voluptates nesciunt optio!  </div>
                    <MdClose className="close_btn"/>

                    <div className="quantity_btns">
                        <span>-</span>
                        <span>5</span>
                        <span>+</span>
                    </div>

                    <div className="text">
                        <span>3</span>
                        <span>x</span>
                        <span>&#8377;2000</span>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default CartItem;
