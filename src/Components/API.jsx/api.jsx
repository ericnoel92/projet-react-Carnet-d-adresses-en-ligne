import axios from "axios";
//import { API_KEY } from "./config/Config"; a changer
 
export const getUserProfile = async (formData) => {
    try {
      const response = await axios.get(`/api/yserprofile?api_key=${API_KEY}`, formData); // changer le liens
      return response.data;
    } catch (error) {
      throw error;
    }
  };