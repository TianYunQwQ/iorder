import request from '@/utils/request'

const { post } = request
interface LoginData {
  userName: string
  userPwd: string
}
/**
 * 登录
 */
export const login = (data: LoginData) => {
  return post('/api/user/login', data)
}
