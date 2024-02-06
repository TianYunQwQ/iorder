import api from "@/api";
import { useMenuStore, useOrderList } from "@/store";
import { useEffect } from "react";

const ResMenu: React.FC = () => {
    const {menuList, setMenu} = useMenuStore()
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
    // const images = [
    //   { id: 1, src: 'https://p.sda1.dev/15/c17f728d68f4a3fe687d615d8dd0d03e/image2.jpg', alt: 'Image 1', name: 'Cookie Sandwich', ingredients: 'Shortbread, chocolate turtle cookies, and red velvet.', price: 100 },
    //   { id: 2, src: 'image2.jpg', alt: 'Image 2', name: 'Combo Burger', ingredients: 'Shortbread, chocolate turtle cookies, and red velvet.', price: 100 },
    //   { id: 3, src: 'image3.jpg', alt: 'Image 3', name: 'Combo Sandwich', ingredients: 'Shortbread, chocolate turtle cookies, and red velvet.', price: 100 }
    // ];
    const buttonStyle = {
      borderRadius: '10px',
      backgroundColor: 'orange',
      padding: '10px',
      width: '100%', // Set the width to 100% for equal sizes
    };
    return (
        <div style={{position: 'relative', minHeight: '100vh'}}>
          <em>
            <strong>
              <h1>Menu</h1>
            </strong>
          </em>
  
          {menuList.map((image, index) => (
              <div key={index} className="menu-item" style={{display: 'flex', alignItems: 'center'}}>
                <img
                    src={image.src}
                    title={image.name}
                    onTouchStart={() => alert(image.name)}
                    style={{width: '200px', marginRight: '10px', borderRadius: '20px'}}
                />
                <div>
                  <p>
                    <em>
                      <strong>{image.name}</strong>
                    </em>
                  </p>
                  <p style={{maxWidth: '120px' /* Set your desired maximum width here */}}>
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
  
  
          <div style={{ marginTop: '20px', position: 'absolute', bottom: '60px', left: '20px' }}>
            <button style={buttonStyle}>
              Save
            </button>
          </div>
  
          <div style={{ marginTop: '20px', position: 'absolute', bottom: '60px', right: '20px' }}>
            <button style={buttonStyle}>
              Change
            </button>
          </div>
        </div>
    );
  };
  
  export default ResMenu;