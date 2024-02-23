import request from '@/utils/request.js';
import axios from 'axios';
import { Orderlist } from "types/index"

export const getOrderlist = () =>
  request({
    url: 'https://yapi.pro/mock/252699/api/orderlist',
    method: 'get'
  });

export const postOrderlist =  (selectedOrder: Orderlist) => {
    axios.post('https://my-json-server.typicode.com/TianYunQwQ/JSONPlaceholder/posts', selectedOrder, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
  };