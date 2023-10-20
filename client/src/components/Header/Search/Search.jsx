import "./Search.scss";
import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/earbuds-prod-1.webp"

const Search = ({setshowSearch}) => {
    return (
        <div className="search_model">
            <div className="form_feild">
                <input 
                    type="text"
                    placeholder="SEARCH FOR PRODUCTS"    
                />
                <MdClose onClick={()=> setshowSearch(false)} />
            </div>
            <div className="search_result_content">
                <div className="search_results">
                    <div className="search_result_item">

                        <div className="img_container">
                            <img src={prod} alt="" />
                        </div>
                        
                        <div className="prod_details">
                            <div className="name">product name</div>
                            <div className="desc">desc Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat dicta culpa cumque quod sint quam ducimus debitis suscipit! Expedita hic voluptatem maxime illum possimus dolorum, temporibus optio officiis laborum! Architecto?</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;
