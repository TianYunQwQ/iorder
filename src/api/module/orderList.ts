import request from '@/utils/request.js';

export const getOrderlist = () =>
  request({
    url: 'https://yapi.pro/mock/252699/api/orderlist',
    method: 'get'
  });