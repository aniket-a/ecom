import "./Category.scss";
import {useNavigate} from "react-router-dom"

const Category = ({ category }) => {
    const navigate = useNavigate()
    return (
        <div className="shop-by-category">
            <div className="categories">

                {
                    category?.data?.map((item) => {
                        return (
                            <div className="category" key={item.id} onClick={()=> navigate(`/category/${item.id}`)} >
                                <img src={import.meta.env.VITE_REACT_APP_DEV_URL + item?.attributes?.img?.data[0]?.attributes?.url} alt="" />
                            </div>
                        )
                        
                    })
                }





            </div>
        </div>
    );
};

export default Category;
