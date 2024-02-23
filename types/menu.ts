export interface Menu {
    id:number
    src: string
    name: string
    description: string
    price: number
    vegen: boolean
}

export interface MenuStore {
    menuList: Menu[]
    setMenu:(store:Menu[])=>void
}

export interface OrderStore {
    orderList: Menu[]
    setOrderList: (store:Menu[]) => void
}