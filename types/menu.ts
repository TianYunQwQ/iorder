export interface Menu {
    image: string
    dish_name: string
    description: string
    price: number
    vegan: boolean
    shop_index:number
    dish_index: number
}

export interface MenuStore {
    menuList: Menu[]
    setMenu:(store:Menu[])=>void
}
