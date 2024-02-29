
import axios from 'axios';


export const postRes = async (data: FormData) => {
    try {
      const response = await axios.post('http://51.20.236.228:8000/addshop', data);
      return response.data;
    } catch (error) {
      throw new Error(`Failed to post shop data: ${error}`);
    }
  };