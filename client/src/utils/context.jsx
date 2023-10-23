import { createContext, useState } from "react"

export const Context = createContext();

const AppContext = ({ children }) => {
    const [category, setCategory] = useState()
    const [product, setProduct] = useState()
    return (
        <Context.Provider value={{category, setCategory, product, setProduct}}>
            {children}
        </Context.Provider>
    )
}

export default AppContext;