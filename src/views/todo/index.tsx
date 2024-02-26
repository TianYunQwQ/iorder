
import  { useEffect, useRef, useState } from 'react'
import api from '@/api'

import { useMenuStore, useOrderList} from "@/store"
import { List, Image, Button, Dialog, TextArea, TextAreaRef } from 'antd-mobile';
import Detail from '@/components/Detail';
function Todo() {
  const {menuList, setMenu} = useMenuStore()
  const {setOrderList} = useOrderList()
  const [quantities, setQuantities] = useState<{ [id: number]: number }>({});
  const [notes, setNotes] = useState<{[id: number]: string}>({})
  const textAreaRef = useRef<TextAreaRef>(null);
  useEffect(() => {
    const getMenuData = async() => {
      try {
        const response = await api.getMenu()
        setMenu(response.menu)
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
      const menuItem = menuList.find(item => item.id === parseInt(id));
      if (menuItem) {
        totalPrice += menuItem.price * quantity;
      }
    }
    return totalPrice;
  };

  // const isOrderDisabled = quantities.every(qty => qty === 0);
  const PostOrder = ()=>{
    const newOrderList = [];
    for (const menuItem of menuList) {
      const quantity = quantities[menuItem.id];
      if (quantity !== undefined && quantity !== 0) {
        const order = {
          id: menuItem.id,
          price: menuItem.price,
          quantity: quantity,
          note: notes[menuItem.id] || '',
          name: menuItem.name,  
          tableNum: "00", 
          key: "",  
          state: "Processing",
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
    })
  }
  return (
      <div>
        <List header={ <span style={{ fontWeight: 'bold', fontStyle: 'italic', color: 'black', fontSize: '20px' }}>Menu</span>} style={{ width: '100%' , "--header-font-size":"20px", "--padding-right":"30px"}} mode='card' >
        {menuList.map(menuList => (
          <List.Item
            key={menuList.id}
            prefix={
              <Image
              src={menuList.src}
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
                    <button onClick={() => handleDecrement(menuList.id)} style={{ marginRight: '3px' }}>-</button>
                     <input
                         type="number"
                         value={quantities[menuList.id] !== undefined ? quantities[menuList.id] : 0}
                         readOnly
                         style={{ width: '20px', textAlign: 'center', marginRight: '3px' }}
                     />
                     <button onClick={() => handleIncrement(menuList.id)}>+</button>
                   </div>
              </div>
              <div>
                {quantities[menuList.id] !== undefined && quantities[menuList.id] !== 0 && (
                  <div>
                    <Button color='warning' size='small' style={{ width: '100%', display: 'block', marginTop: '5px' }} onClick={() => handleNote(menuList.id)}>Note</Button>
                  </div>
                )}
              </div>
            </div>
            }
          >
            {menuList.name}
          </List.Item>
      ))}
    </List>
  
      <div style={{ marginTop: '20px', position: 'absolute', bottom: '90px', left: '20px' }}>
        <strong>Total : {getTotalPrice().toFixed(2)} kr</strong>
      </div>
      <div style={{ marginTop: '20px', position: 'absolute', bottom: '70px', right: '20px' }}>
        <Button color='warning' size='small' onClick={PostOrder}>iOrder</Button>
      </div>
    </div>
  );
}

export default Todo