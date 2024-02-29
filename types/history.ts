export interface Shop {
    name:string
    orderTime:string
    logo:string
    shop_index:number
  }
export interface ShopStore {
    historyList: History[]
    setHistory:(store:History[])=>void
}