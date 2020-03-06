import { APP_KEY, BASE_URL } from "../config/api_config";
import axios from "axios";

export const getNowPlaying = async () => {
  const response = await axios.get(`${BASE_URL}/now_playing?api_key=${APP_KEY}`);  
  return response.data.results;
};
