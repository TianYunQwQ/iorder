import request from '@/utils/request.js';
import axios from 'axios';

export const getMenu = (shop_index:number) =>
  request({
    // url: 'https://yapi.pro/mock/252699/api/menu',
    url:`http://51.20.236.228:8000/menu/${shop_index}`,
    method: 'get'
  });
export const postMenu = (formData: FormData) => axios.post(
    // "https://my-json-server.typicode.com/TianYunQwQ/JSONPlaceholder/posts",
    "http://51.20.236.228:8000/adddish",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data", // 设置请求头为 multipart/form-data
      },
    }
  );
export const changeMenu = (formData: FormData) => axios.post(
    "http://51.20.236.228:8000/modifydish",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data", // 设置请求头为 multipart/form-data
      },
    }
  );
export const deleteMenu = (id:number) => axios.delete(`http://51.20.236.228:8000/deletedish/${id}`);

export const getResMenu = async (username: string) => {
  try {
    const response = await axios.post('http://51.20.236.228:8000/ownermenu', {
      username: username
    });
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch menu: ${error}`);
  }
};