export interface Shop {
    shop_name:string
    shop_index:number
    image:string
    isselling:boolean
    username:string
    description:string
  }
export interface ShopStore {
    ShopList: Shop[]
    setShop:(store:Shop[])=>void
}