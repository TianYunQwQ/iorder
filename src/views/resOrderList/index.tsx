import api from "@/api";
import storage from "@/utils/storage";
import { List, Button, Dialog } from 'antd-mobile'
import React, { useState, useEffect } from 'react'
import { Orderlist } from "types/index"

const ResOrder: React.FC = () => {
  const [order, setOrder] = useState<Orderlist[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.getOrderlist(storage.getItem('username'));
        setOrder(response.data.data.list);
        console.log(response.data.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const changeState = (selectedOrder: Orderlist) => {
    Dialog.confirm({
      content: 'Change State',
      closeOnMaskClick: true,
      cancelText: "Cancel Order",
      confirmText: "Finish Order",
      onCancel: async () => {
        try {
          selectedOrder.state = "Cancelled";
          await api.changeOrderlist(selectedOrder);
          setOrder([...order]);
        } catch (error) {
          console.error('Error updating order state:', error);
        }
      },
      onConfirm: async () => {
        try {
          selectedOrder.state = "Processed";
          const response = await api.changeOrderlist(selectedOrder);
          setOrder([...order]);
          console.log("Success post order:", response)
        } catch (error) {
          console.error('Error updating order state:', error);
        }
      }
    });
  };

  return (
    <List header={<span style={{ fontWeight: 'bold', fontStyle: 'italic', color: 'black', fontSize: '20px' }}>Orderlist</span>} style={{ width: '100%', "--header-font-size": "20px" }} mode='card'>
      {order.map(orderItem => (
        <List.Item
          key={orderItem.dish_index}
          prefix={<span style={{ color: 'orange' }}>Table: {orderItem.tableNum}</span>}
          description={orderItem.note}
          extra={
            <div style={{ textAlign: 'right' }}>
              <div>{`Quantity: ${orderItem.quantity}`}</div>
              <div>
                <Button 
                  color={orderItem.state === 'Processing' ? 'warning' : orderItem.state === 'Processed' ? 'success' : 'danger'} 
                  size='small' 
                  onClick={() => changeState(orderItem)}
                >
                  {orderItem.state}
                </Button>
              </div>
            </div>
          }
        >
          {orderItem.name}
        </List.Item>
      ))}
    </List>
  );
};

  
  export default ResOrder
  