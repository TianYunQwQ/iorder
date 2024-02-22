import api from "@/api";
import { useMenuStore, useOrderList } from "@/store";
import { useEffect } from "react";
import { Image, List, Button, Dialog } from 'antd-mobile'

const ResMenu: React.FC = () => {
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

    const buttonStyle = {
      borderRadius: '10px',
      backgroundColor: 'orange',
      padding: '10px',
      width: '100%', // Set the width to 100% for equal sizes
    };
    return (
        // <div style={{position: 'relative', minHeight: '100vh'}}>
        //   <em>
        //     <strong>
        //       <h1>Menu</h1>
        //     </strong>
        //   </em>
  
        //   {menuList.map((image, index) => (
        //       <div key={index} className="menu-item" style={{display: 'flex', alignItems: 'center'}}>
        //         <img
        //             src={image.src}
        //             title={image.name}
        //             onTouchStart={() => alert(image.name)}
        //             style={{width: '200px', marginRight: '10px', borderRadius: '20px'}}
        //         />
        //         <div>
        //           <p>
        //             <em>
        //               <strong>{image.name}</strong>
        //             </em>
        //           </p>
        //           <p style={{maxWidth: '120px' /* Set your desired maximum width here */}}>
        //             {image.ingredients}
        //           </p>
        //           <p>
        //             {image.price.toFixed(2)}kr<br/>
        //             <div style={{display: 'flex', alignItems: 'center'}}>
  
        //             </div>
        //           </p>
        //         </div>
        //       </div>
        //   ))} 
        <div>
        <List header={ <span style={{ fontWeight: 'bold', fontStyle: 'italic', color: 'black', fontSize: '20px' }}>Menu</span>} style={{ width: '100%' , "--header-font-size":"20px", "--padding-right":"30px"}} mode='card' >
        {menuList.map(menuList => (
          <List.Item
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
                <Button color='warning' size='small' >test</Button>
              </div>
            </div>
            }
          >
            {menuList.name}
          </List.Item>
      ))}
    </List>
  
       
          <div style={{ marginTop: '20px', position: 'absolute', bottom: '60px', left: '20px' }}>
            <Button color='warning' size='small' >Add</Button>
          </div>
  
          <div style={{ marginTop: '20px', position: 'absolute', bottom: '60px', right: '20px' }}>
            <Button color='warning' size='small' >Change</Button>
          </div>
        </div>
    );
  };
  
  export default ResMenu;