export interface Menu {
    src: string
    name: string
    ingredients: string
    price: number
    count: number
}

export interface MenuStore {
    menuList: Menu[]
    setMenu:(store:Menu[])=>void
}

export interface OrderStore {
    orderList: Menu[]
    setOrderList: (store:Menu[]) => void
}