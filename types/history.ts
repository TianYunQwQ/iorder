export interface History {
    name:string
    orderTime:string
    logo:string
  }
export interface HistoryStore {
    historyList: History[]
    setHistory:(store:History[])=>void
}