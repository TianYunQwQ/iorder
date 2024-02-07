
import  { useEffect, useState } from 'react'
import api from '@/api'
import { Link } from 'react-router-dom';

import { useMenuStore, useOrderList } from "@/store"
function Todo() {
  const {menuList, setMenu} = useMenuStore()
  const { setOrderList} = useOrderList()
  useEffect(() => {
    const getMenuData = async() => {
      try {
        const response = await api.getMenu()
        setMenu(response.menu)
        setOrderList(response.menu)
      } catch (error) {
        console.error('Error fetching menu:', error)
      }
    }
    getMenuData()
  },[setMenu])

  // return(
  //   <List style={{ width: '100%' }} mode='card'>
  //   {menuList.map(users => (
  //     <List.Item
  //       key={users.name}
  //       prefix={
  //         <Image
  //           src={users.src}
  //           style={{ borderRadius: 20 }}
  //           fit='cover'
  //           width={80}
  //           height={80}
  //         />
  //       }
  //       description={users.ingredients}
  //       extra = {users.price}
  //     >
  //       {users.name}
  //     </List.Item>
  //   ))}
  // </List>
  // )
  const [quantities, setQuantities] = useState(menuList.map(() => 0));

  const handleIncrement = (index: number) => {
    const newQuantities = [...quantities];
    newQuantities[index]++;
    setQuantities(newQuantities);
  };

  const handleDecrement = (index: number) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 0) {
      newQuantities[index]--;
      setQuantities(newQuantities);
    }
  };

  const getTotalPrice = (): number => {
    let totalPrice = 0;
    menuList.forEach((image, index) => {
      totalPrice += quantities[index] * image.price;
    });
    return totalPrice;
  };

  const isOrderDisabled = quantities.every(qty => qty === 0);

  return (
      <div style={{ position: 'relative', minHeight: '90vh' }}>
        <em>
          <strong>
            <h1>Menu</h1>
          </strong>
        </em>

        {menuList.map((image, index) => (
            <div key={index} className="menu-item" style={{ display: 'flex', alignItems: 'center' }}>
              <img
                  src={image.src}
                  title={image.name}
                  onTouchStart={() => alert(image.name)}
                  style={{ width: '150px', marginRight: '10px', borderRadius: '20px' }}
              />
              <div>
                <p>
                  <em>
                    <strong>{image.name}</strong>
                  </em>
                </p>
                <p style={{ maxWidth: '200px' /* Set your desired maximum width here */ }}>
                  {image.ingredients}
                </p>
                <p>
                  {image.price.toFixed(2)}kr<br />
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <button onClick={() => handleDecrement(index)} style={{ marginRight: '5px' }}>-</button>
                    <input
                        type="number"
                        value={quantities[index]}
                        readOnly
                        style={{ width: '30px', textAlign: 'center', marginRight: '5px' }}
                    />
                    <button onClick={() => handleIncrement(index)}>+</button>
                  </div>
                </p>
              </div>
            </div>
        ))}

        <div style={{ marginTop: '20px', position: 'absolute', bottom: '70px', right: '20px' }}>
          <strong>Total : {getTotalPrice().toFixed(2)} kr</strong>
        </div>

        <div style={{ marginTop: '20px', position: 'absolute', bottom: '20px', right: '20px' }}>
          {/* Disable the button when all quantities are 0 */}
          {isOrderDisabled ? (
              <button disabled style={{ borderRadius: '10px', backgroundColor: 'lightgray', padding: '10px' }}>
                iOrder
              </button>
          ) : (
              <Link to="/Detail" state={{ totalPrice: getTotalPrice(), quantities: [...quantities] }}>
                <button style={{ borderRadius: '10px', backgroundColor: 'orange', padding: '10px' }}>
                  iOrder
                </button>
              </Link>
          )}
        </div>
      </div>
  );
}

export default Todo