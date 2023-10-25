import "./Search.scss";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import useFetch from "../../../hooks/useFetch"
import { useNavigate, useParams } from "react-router-dom";


const Search = ({ setshowSearch }) => {

    const {id} = useParams()

    const Navigate = useNavigate()

    const [query, setQuery] = useState("")

    const queryHandler = (e) => {
        setQuery(e.target.value);
    }

    let { data } = useFetch(`/api/products?populate=*&filters[title][$contains]=${query}`)
    console.log(data, "query")

    return (
        <div className="search_model">
            <div className="form_feild">
                <input
                    type="text"
                    placeholder="SEARCH FOR PRODUCTS"
                    value={query}
                    onChange={queryHandler}
                />
                <MdClose onClick={() => setshowSearch(false)} />
            </div>


            <div className="search_result_content">
                <div className="search_results">
                    {
                        data?.data?.map((item) => {
                            
                            return (
                                <div className="search_result_item" key={item.id} onClick={()=> {
                                    Navigate("/product/" + item?.id)
                                    setshowSearch(false)
                                }}>
                                    <div className="img_container">
                                        <img src={import.meta.env.VITE_REACT_APP_DEV_URL + item?.attributes?.img?.data[0]?.attributes?.url } alt="" />
                                    </div>

                                    <div className="prod_details">
                                        <div className="name">{item?.attributes?.title}</div>
                                        <div className="desc">{item?.attributes?.desc}</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Search;
