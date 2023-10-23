import "./Category.scss";
import cat1 from "../../../assets/category/cat-1.jpg";

const Category = ({ category }) => {
    return (
        <div className="shop-by-category">
            <div className="categories">

                {
                    category?.data?.map((item) => {
                        console.log(item)
                        return (
                            <div className="category" key={item.id}>
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
