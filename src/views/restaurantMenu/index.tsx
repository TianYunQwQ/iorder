import api from "@/api";
import { useMenuStore, useOrderList } from "@/store";
import { useEffect } from "react";
import { Image, List, Button, Dialog } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'

const ResMenu: React.FC = () => {
    const {menuList, setMenu} = useMenuStore()
    const { setOrderList} = useOrderList()
    const navigate = useNavigate()
    const Addmenu = ()=>{
      navigate('/addmenu')
    }
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
            <Button color='warning' size='small' onClick={Addmenu}>Add</Button>
          </div>
  
          <div style={{ marginTop: '20px', position: 'absolute', bottom: '60px', right: '20px' }}>
            <Button color='warning' size='small' >Change</Button>
          </div>
        </div>
    );
  };
  
  export default ResMenu;