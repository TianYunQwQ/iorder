export interface Userinfo {
    username: string
    password: string
    category: number
    telephone: string
    email: string
    token: string
  }
export interface UserStore {
    userinfo: Userinfo
    setUserinfo:(store:Userinfo)=>void
}