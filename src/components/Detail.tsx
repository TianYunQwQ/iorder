import { useOrderList } from '@/store';
import { List } from 'antd-mobile';

function Detail({ totlePrice }: { totlePrice: number }) {
    const {orderList} = useOrderList()

    return (
    <>
    <List mode='card'>
        {orderList.map(orderItem => (
            <List.Item
                key={orderItem.id}
                    description={orderItem.note}
                    extra={<div style={{ textAlign: 'right' }}>
                        <div>{`Quantity: ${orderItem.quantity}`}</div>
                        <div>{orderItem.price}kr</div>
                    </div>}
                >
                    {orderItem.name}
                </List.Item>
            ))}
            </List>
            <div style={{ marginTop: '20px', position: 'absolute', top: '20px', left: '10px' }}>
                <strong>Total : {totlePrice} kr</strong>
            </div>
    </>
    );
}

export default Detail;