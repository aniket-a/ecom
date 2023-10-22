import "./Product.scss";
import {useNavigate} from "react-router-dom"

const Product = ({data, id}) => {
    const navigate = useNavigate()
    return (
        <div className="product_card" key={id} onClick={()=> navigate("/product/"+id)}>
            <div className="thumnail">
                <img src={import.meta.env.VITE_REACT_APP_DEV_URL + data?.img?.data[0]?.attributes?.url} alt="" />
            </div>
            <div className="prod_details">
                <span className="name">{data?.title}</span>
                <span className="price">&#8377;{data?.price}/-</span>
            </div>
        </div>
    );
};

export default Product;
