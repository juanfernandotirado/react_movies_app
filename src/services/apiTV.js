import { APP_KEY, BASE_URL } from "../config/api_config";
import axios from "axios";

export const getAiringToday = async () => {
  const response = await axios.get(`${BASE_URL}/tv/airing_today?api_key=${APP_KEY}`);  
  return response.data.results;
};
