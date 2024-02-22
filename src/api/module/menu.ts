import request from '@/utils/request.js';

export const getMenu = () =>
  request({
    url: 'https://yapi.pro/mock/252699/api/menu',
    method: 'get'
  });