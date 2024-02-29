import api from "@/api";
import storage from "@/utils/storage";
import { List, Button } from 'antd-mobile'
import React, { useState, useEffect } from 'react'
import { Orderlist } from "types/index"

const Orders: React.FC = () => {
  const [order, setOrder] = useState<Orderlist[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.getOrderlist(storage.getItem('username'));
        console.log(response)
        setOrder(response.data.data.list);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
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

  
  export default Orders
  