import "./Products.scss";
import Product from "../Products/Product/Product"

const Products = () => {
    return (
        <div className="products_container">
            <div className="sec_heading">Heading Section</div>
            <div className="products">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    );
};

export default Products;
