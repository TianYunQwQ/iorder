export interface User {
  _id: string
  userId: string
  userName: string
  userEmail: string
  mobile: string
  role: number
  state: number
  job: string
  deptId: Array<string>
  roleList: Array<string>
  createTime: string
  lastLoginTime: string
}
