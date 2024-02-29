import request from '@/utils/request.js';

export const getShop = () =>
  request({
    url: 'http://51.20.236.228:8000/shop',
    method: 'get'
  });