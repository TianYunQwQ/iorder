import { User, History, HistoryStore, Menu, MenuStore, OrderStore, Orderlist, Userinfo, UserStore, ShopStore, Shop } from 'types/index'
import { create } from 'zustand'

export const useStore = create<{
  token: string
  userInfo: {
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
  collapsed: boolean
  updateToken: (token: string) => void
  updateUserInfo: (userInfo: User) => void
  updateCollapsed: () => void
}>((set) => ({
  token: '',
  userInfo: {
    userEmail: '',
    userName: '',
    userId: '',
    state: 0,
    mobile: '',
    job: '',
    _id: '',
    deptId: [],
    role: 0,
    roleList: [],
    createTime: '0',
    lastLoginTime: '0',
  },
  collapsed: false,
  updateToken: (token: string) => set(() => ({ token })),
  updateUserInfo: (userInfo: User) => set(() => ({ userInfo })),
  updateCollapsed: () =>
    set((state) => {
      return {
        collapsed: !state.collapsed,
      }
    }),
}))

export const useHistoryStore = create<HistoryStore>((set) => ({
  historyList:[],
  setHistory:(store:History[]) => set({historyList:store})
}))

export const useMenuStore = create<MenuStore>((set) => ({
  menuList:[],
  setMenu:(store:Menu[]) => set({menuList:store})
}))

export const useOrderList = create<OrderStore>((set) => ({
  orderList:[],
  setOrderList:(store:Orderlist[]) => set({orderList:store})
}))

export const useUserStore = create<UserStore>((set) => ({
  userinfo: {
      username: '',
      password: '',
      email:'',
      telephone:'',
      token:'',
      category: 1
  },
  setUserinfo: (newInfo) => set((state) => ({ userinfo: { ...state.userinfo, ...newInfo } })),
}));

export const useShopStore = create<ShopStore>((set) => ({
  ShopList:[],
  setShop:(store:Shop[]) => set({ShopList:store})
}))
