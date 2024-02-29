import axios from 'axios';
import { Orderlist } from "types/index"

// export const getOrderlist = () =>
//   request({
//     url: 'http://51.20.236.228:8000/orderhistory',
//     method: 'get'
//   });
export const getOrderlist = (username:string) => {
    return axios.get('http://51.20.236.228:8000/orderhistory', {
      params: {
        username: username
      }
    });
  };
export const postOrderlist =  (selectedOrder: Orderlist) => {
    axios.post('http://51.20.236.228:8000/addorder', selectedOrder, {
      });
  };
export const changeOrderlist = (selectedOrder: Orderlist) => {
    axios.post('http://51.20.236.228:8000/orderstatechange', selectedOrder, {
      });
  };