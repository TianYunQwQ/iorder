import api from "@/api";
import { useMenuStore, useOrderList } from "@/store";
import { useEffect } from "react";

const ResOrder: React.FC = () => {
    // const images = [
    //   { id: 1,  name: 'Cookie Sandwich', ingredients: 'Shortbread, chocolate turtle cookies, and red velvet.', price: 100 },
    //   { id: 2,  name: 'Combo Burger', ingredients: 'Shortbread, chocolate turtle cookies, and red velvet.', price: 100 },
    //   { id: 3,  name: 'Combo Sandwich', ingredients: 'Shortbread, chocolate turtle cookies, and red velvet.', price: 100 }
    // ];
    const { setMenu} = useMenuStore()
    const {orderList, setOrderList} = useOrderList()
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
    return (
        <div style={{position: 'relative', minHeight: '100vh'}}>
          <em>
            <strong>
              <h1>Order List</h1>
            </strong>
          </em>
  
          {orderList.map((image, index) => (
              <div key={index} className="menu-item" style={{display: 'flex', alignItems: 'center'}}>
  
                <div>
                  <p>
                    <em>
                      <strong>{image.name}</strong>
                      <strong style={{marginRight: '0'}}>x{1}</strong>
                    </em>
                  </p>
                  <p style={{maxWidth: '500px' /* Set your desired maximum width here */}}>
                    {image.ingredients}
                  </p>
                  <p>
                    {image.price.toFixed(2)}kr<br/>
                    <div style={{display: 'flex', alignItems: 'center'}}>
  
                    </div>
                  </p>
                </div>
              </div>
          ))}
  
  
        </div>
    );
  };
  
  export default ResOrder
  