import { APP_KEY, BASE_URL } from "../config/api_config";
import axios from "axios";

export const getSearchResults = async (category, query) => {
  const response = await axios.get(`${BASE_URL}/search/${category}?api_key=${APP_KEY}&query=${query}`);  
  return response.data.results;
};