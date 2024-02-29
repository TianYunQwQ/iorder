import request from '@/utils/request'
import axios from 'axios'

const { post } = request
interface LoginData {
  username: string
  passward: string
}
/**
 * 登录
 */
export const login = (data: LoginData) => {
  return post('http://51.20.236.228:8000/login', data)
}


export const editUser = async (data: FormData) => {
  try {
    const response = await axios.post('http://51.20.236.228:8000/changeuserinfo', data);
    return response.data;
  } catch (error) {
    throw new Error(`Error editing user`);
  }
};