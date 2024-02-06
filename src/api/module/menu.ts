import request from '@/utils/request.js';

export const getMenu = () =>
  request({
    url: '/menu',
    method: 'get'
  });