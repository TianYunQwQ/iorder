export interface Orderlist {
    id:number
    name:string
    tableNum:string
    note:string
    quantity:number
    key:string
    state:string
    price:number
  }
  export interface OrderStore {
    orderList: Orderlist[]
    setOrderList: (store:Orderlist[]) => void
}