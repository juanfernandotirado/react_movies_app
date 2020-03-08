import { APP_KEY, BASE_URL } from "../config/api_config";
import axios from "axios";

export const getMovies = async (category) => {
  const response = await axios.get(`${BASE_URL}/movie/${category}?api_key=${APP_KEY}`);  
  return response.data.results;
};
