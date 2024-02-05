import request from '@/utils/request.js';

export const getHistory = () =>
  request({
    url: '/history',
    method: 'get'
  });
