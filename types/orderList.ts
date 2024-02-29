export interface Orderlist {
    dish_index:number
    name:string
    tableNum:string
    note:string
    quantity:number
    state:string
    price:number
    username:string
    shop_index:number
  }
  export interface OrderStore {
    orderList: Orderlist[]
    setOrderList: (store:Orderlist[]) => void
}