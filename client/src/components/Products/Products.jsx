import "./Products.scss";
import Product from "../Products/Product/Product"

const Products = ({innerpage, headingText}) => {
    return (
        <div className="products_container">
            {!innerpage && <div className="sec_heading">{headingText}</div>}
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
