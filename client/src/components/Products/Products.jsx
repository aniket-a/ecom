import "./Products.scss";
import Product from "../Products/Product/Product"

const   Products = ({ innerpage, headingText, product }) => {
    return (
        <div className="products_container">
            {!innerpage && <div className="sec_heading">{headingText}</div>}
            <div className="products">
                {
                    product?.data?.map((item)=>{
                        return(
                            <Product key={item.id} data={item.attributes} id={item.id} />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Products;
