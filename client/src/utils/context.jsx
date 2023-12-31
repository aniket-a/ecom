import { createContext, useEffect, useState } from "react"
import {useLocation} from "react-router-dom"
export const Context = createContext();

const AppContext = ({ children }) => {
    const [category, setCategory] = useState()
    const [product, setProduct] = useState()

    const [cartItems, setcartItems] = useState([])
    const [cartCount, setcartCount] = useState(0)
    const [cartSubTotal, setcartSubTotal] = useState(0)

    const location = useLocation()

    useEffect(()=>{
        window.scrollTo(0,0)
    },[location])

    useEffect(()=>{

        let count = 0;
        cartItems.map((item)=> count += item.attributes.quantity)
        setcartCount(count)

        let subTotal = 0;
        cartItems.map((item)=> subTotal+= item.attributes.quantity * item.attributes.price) 
        setcartSubTotal(subTotal)
    },[cartItems])

    const handleAddToCart =(product, quantity)=>{
        let items = [...cartItems];
        let index = items.findIndex(p=> p.id === product.id)
        if(index !== -1){
            items[index].attributes.quantity += quantity
        }else{
            product.attributes.quantity = quantity
            items = [...items, product]
        }
        setcartItems(items)
    }
    
    const handleRemoveToCart =(product)=>{
        let items = [...cartItems]
        items = items.filter((p)=> p.id !== product.id)
        setcartItems(items)
    }

    const handleProductCartQuantity = (type, product)=>{
        let items = [...cartItems];
        let index = items.findIndex((p)=> p.id === product.id)
        if(type === "inc"){
            items[index].attributes.quantity += 1
        }else if(type === "dec"){
            if(items[index].attributes.quantity === 1)return ;
            items[index].attributes.quantity -= 1 
        }
        setcartItems(items)
    }



    return (
        <Context.Provider value={{
            category,
            setCategory,
            product,
            setProduct,
            cartItems,
            setcartItems,
            cartCount,
            setcartCount,
            cartSubTotal,
            setcartSubTotal,
            handleAddToCart,
            handleRemoveToCart,
            handleProductCartQuantity
        }}>
            {children}
        </Context.Provider>
    )
}

export default AppContext;