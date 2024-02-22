import request from '@/utils/request.js';

export const getHistory = () =>
  request({
    url: 'https://yapi.pro/mock/252699/api/history1',
    method: 'get'
  });
