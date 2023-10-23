
import axios from "axios";

const params ={
  headers: {
    Authorization: "bearer " + import.meta.env.VITE_REACT_APP_STRAPI_TOKEN_KEY,
  },
}
  
export const fetchDataFromApi = async (url) => {
  try {
    const response = await axios.get(import.meta.env.VITE_REACT_APP_DEV_URL + url , params );

    return response.data;
    
  } catch (error) {
    console.log(error);
    return error;
  }
};
