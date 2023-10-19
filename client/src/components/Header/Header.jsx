import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../utils/context";

import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";

import { BiSolidShoppingBags } from "react-icons/bi"

import Cart from "../Cart/Cart";
import Search from "./Search/Search";
import "./Header.scss";

const Header = () => {

    const [scroll, setScroll] = useState(false)
    const [showCart, setshowCart] = useState(false)

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, [])
    return (
        <>
            <header className={`${scroll ? "main-header sticky_header" : "main-header"}`}>
                <div className="header-content">
                    <ul className="left">
                        <li>Home</li>
                        <li>About</li>
                        <li>Categories</li>
                    </ul>
                    <div className="center"><BiSolidShoppingBags />shopstore</div>
                    <div className="right">
                        <TbSearch />
                        <AiOutlineHeart />

                        <span className="cart_icon">
                            <CgShoppingCart onClick={()=> setshowCart(true)}/>
                            <span>5</span>
                        </span>
                    </div>
                </div>
            </header>
            {showCart && <Cart setshowCart={setshowCart}/>}
        </>
    );
};

export default Header;
