import api from "@/api";
import { useMenuStore, useOrderList } from "@/store";
import { Image, List, Button, Dialog } from 'antd-mobile'
import orderList from "mock/orderList";
import React, { useState, useEffect } from 'react'
import { Orderlist } from "types/index"
const ResOrder: React.FC = () => {
  const [order, setOrder] = useState<Orderlist[]>([])
  const [buttonState, setButtonState] = useState("Processing");
  const ChangeState = () => {
    Dialog.confirm({
      content: 'Change State',
      closeOnMaskClick: true,
      cancelText: "Cancel Order",
      confirmText: "Finish Order",
      onCancel: ()=>{
        
      },
      onConfirm: ()=>{
       
      }
    
    })
  }


  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await api.getOrderlist()
        setOrder(response.list)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
    return () => {
    }
  }, []) 

  return (
    <List header={ <span style={{ fontWeight: 'bold', fontStyle: 'italic', color: 'black', fontSize: '20px' }}>Orderlist</span>} style={{ width: '100%' , "--header-font-size":"20px"}} mode='card' >
      {order.map(order => (
        <List.Item
          prefix={
            <span style={{ color: 'orange' }}>Table: {order.tableNum}</span>
          }
          description={order.note} 
          extra = {
            <div style={{ textAlign: 'right' }}>
            <div>{`Account: ${order.quantity}`}</div>
            <div>
              <Button color='warning' size='small' onClick={ChangeState}>{buttonState}</Button>
            </div>
          </div>
          }
        >
          {order.name}
        </List.Item>
      ))}
    </List>
  )
  };
  
  export default ResOrder
  