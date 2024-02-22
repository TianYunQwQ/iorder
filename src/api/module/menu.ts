import request from '@/utils/request.js';
import axios from 'axios';

export const getMenu = () =>
  request({
    url: 'https://yapi.pro/mock/252699/api/menu',
    method: 'get'
  });
export const postMenu = (values: any) => axios.post(
  "https://my-json-server.typicode.com/TianYunQwQ/JSONPlaceholder/posts",
  values,
  {
    headers: {
      "Content-Type": "application/json", // 设置请求头为 application/json
    },
  }
);