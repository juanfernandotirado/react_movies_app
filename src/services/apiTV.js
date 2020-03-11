import { APP_KEY, BASE_URL } from "../config/api_config";
import axios from "axios";

export const getTVShows = async (category) => {
  const response = await axios.get(`${BASE_URL}/tv/${category}?api_key=${APP_KEY}`);  
  return response.data.results;
};
