
import  { useEffect, useRef, useState } from 'react'
import api from '@/api'

import { useMenuStore, useOrderList} from "@/store"
import { List, Image, Button, Dialog, TextArea, TextAreaRef, Stepper, Switch } from 'antd-mobile';
import Detail from '@/components/Detail';
import { Orderlist } from 'types/index';
import { useLocation, useParams } from 'react-router-dom';
import storage from '@/utils/storage';
function Menu() {
  const location = useLocation();
  const locationState = location.state as { qrCodeData: string; tableNum: string };
  const initialTableNum = locationState && locationState.tableNum ? parseInt(locationState.tableNum, 10) : 0;
  const [showVeganOnly, setShowVeganOnly] = useState(false);
  const {menuList, setMenu} = useMenuStore()
  const {setOrderList} = useOrderList()
  const [quantities, setQuantities] = useState<{ [id: number]: number }>({});
  const [notes, setNotes] = useState<{[id: number]: string}>({})
  const [tableNum, settableNum] = useState(initialTableNum)
  const {shop_index} = useParams()
  const textAreaRef = useRef<TextAreaRef>(null);
  useEffect(() => {
    const getMenuData = async() => {
      try {
        const response = await api.getMenu(parseInt(shop_index??''))
        setMenu(response.list)
      } catch (error) {
        console.error('Error fetching menu:', error)
      }
    }
    getMenuData()
  },[setMenu])

  const handleNote = (id:number) => {
    
    Dialog.confirm({
      title: 'Post notes',
      content: (
        <>
         <TextArea
          ref={textAreaRef}
          placeholder='Input your note'
          showCount
          maxLength={100}
        />
        </>
      ),
      closeOnMaskClick: true,
      cancelText: "Cancel",
      confirmText: "Submit",
      onConfirm: ()=>{
        const content = textAreaRef.current?.nativeElement?.value;
        setNotes(prevNotes => ({
          ...prevNotes,
          [id]: content !== undefined ? content : '',
        }));
        
      }
    })
  }
  const handleDecrement = (id: number) => {
    const newQuantities = { ...quantities };
    if (newQuantities[id] > 0) {
      newQuantities[id]--;
      setQuantities(newQuantities);
    }
  };

  const handleIncrement = (id: number) => {
    const newQuantities = { ...quantities };
    newQuantities[id] = (newQuantities[id] || 0) + 1;
    setQuantities(newQuantities);
  };

  const getTotalPrice = () => {
    let totalPrice = 0;
    for (const id in quantities) {
      const quantity = quantities[id];
      const menuItem = menuList.find(item => item.dish_index === parseInt(id));
      if (menuItem) {
        totalPrice += menuItem.price * quantity;
      }
    }
    return totalPrice;
  };

  const PostOrder = ()=>{
    const newOrderList:Orderlist[] = [];
    for (const menuItem of menuList) {
      const quantity = quantities[menuItem.shop_index];
      if (quantity !== undefined && quantity !== 0) {
        const order = {
          dish_index: menuItem.dish_index,
          price: menuItem.price,
          quantity: quantities[menuItem.dish_index],
          note: notes[menuItem.dish_index] || '',
          name: menuItem.dish_name,  
          tableNum: tableNum.toString(), 
          state: "Processing",
          username: storage.getItem('username'),
          shop_index: menuItem.shop_index
        };
        newOrderList.push(order);
      }
    }
    setOrderList(newOrderList);
    console.log(newOrderList);
    Dialog.confirm({
      title: 'My Order',
      content: (
        <>
          <div>
            <Detail totlePrice = {getTotalPrice()}></Detail>
          </div>
        </>
      ),
      closeOnMaskClick: true,
      cancelText: "Cancel",
      confirmText: "Submit",
      onConfirm: async () => {
        try {
          await api.postOrderlist(newOrderList);
        } catch (error) {
          console.error('Error post order:', error);
        }
      }
    })
  }
  return (
      <div>
        <List header={(
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontWeight: 'bold', fontStyle: 'italic', color: 'black', fontSize: '20px' }}>Menu</span>
        <div>
          <strong style={{ fontSize: '12px' }}>Vegan Only:</strong>
          <Switch checked={showVeganOnly} onChange={() => setShowVeganOnly(!showVeganOnly)} />
        </div>
        
      </div>
      )} 
      style={{ width: '100%', "--header-font-size":"20px", "--padding-right":"30px"}} 
      mode='card'
    > 
        {menuList
        .filter(menuItem => !showVeganOnly || menuItem.vegan)
        .map(menuList => (
          <List.Item
            key={menuList.dish_index}
            prefix={
              <Image
              src={'http://51.20.236.228:8000'+menuList.image}
              style={{ borderRadius: 20 }}
              fit='cover'
              width={80}
              height={80}
              />
            }
            description={menuList.description} 
            extra = {
              <div style={{ textAlign: 'right' }}>
              <div>{`${menuList.price}kr`}</div>
              <div>
                   <div style={{ display: 'flex', alignItems: 'center' }}>
                    <button onClick={() => handleDecrement(menuList.dish_index)} style={{ marginRight: '3px' }}>-</button>
                     <input
                         type="number"
                         value={quantities[menuList.dish_index] !== undefined ? quantities[menuList.dish_index] : 0}
                         readOnly
                         style={{ width: '20px', textAlign: 'center', marginRight: '3px' }}
                     />
                     <button onClick={() => handleIncrement(menuList.dish_index)}>+</button>
                   </div>
              </div>
              <div>
                {quantities[menuList.dish_index] !== undefined && quantities[menuList.dish_index] !== 0 && (
                  <div>
                    <Button color='warning' size='small' style={{ width: '100%', display: 'block', marginTop: '5px' }} onClick={() => handleNote(menuList.dish_index)}>Note</Button>
                  </div>
                )}
              </div>
            </div>
            }
          >
            {menuList.dish_name}
          </List.Item>
      ))}
    </List>
  
      <div style={{ marginTop: '20px', position: 'absolute', bottom: '70px', left: '20px' }}>
        <strong>Total : {getTotalPrice().toFixed(2)} kr</strong>
      </div>
      <div style={{ marginTop: '20px', position: 'absolute', bottom: '70px', right: '20px' }}>
        <Button color='warning' size='small' onClick={PostOrder}>iOrder</Button>
      </div>
      <div  style={{ marginLeft: '20px' }}>
      <strong>Table Number:</strong>
      <Stepper
          defaultValue={tableNum}
          onChange={value => {
            settableNum(value)
          }}
        />
      </div>
    </div>
  );
}

export default Menu