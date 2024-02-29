import api from "@/api";
import { useMenuStore } from "@/store";
import { useEffect } from "react";
import { Image, List, Button } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'
import storage from "@/utils/storage";

const ResMenu: React.FC = () => {
    const {menuList, setMenu} = useMenuStore()
    const navigate = useNavigate()
    const ChangeMenu = (dish_index:number) => {
      navigate(`/changemenu/${dish_index}`)
    }
    const DeleteMenu = async (id: number) => {
      try {
        const response = await api.deleteMenu(id)
        console.log('Delete successful:', response.data)
      } catch (error) {
        console.error('Error deleting menu:', error)
      }
    }
    const Addmenu = ()=>{
      navigate(`/addmenu/${storage.getItem('username')}`)
    }
    useEffect(() => {
        const getMenuData = async() => {
        try {
            const response = await api.getResMenu(storage.getItem('username'))
            setMenu(response.data.list)
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
            key={menuList.dish_name}
            prefix={
              <Image
              src={'http://51.20.236.228:8000/'+ menuList.image}
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
              <Button color='warning' size='small' style={{ width: '100%', display: 'block', marginBottom: '5px' }} onClick={() => ChangeMenu(menuList.dish_index)}>Change</Button>
            <Button color='danger' size='small' style={{ width: '100%', display: 'block', marginBottom: '5px' }} onClick={() => DeleteMenu(menuList.dish_index)}>Delete</Button>
              </div>
            </div>
            }
          >
            {menuList.dish_name}
          </List.Item>
      ))}
    </List>
  
       
          <div style={{ marginTop: '20px', position: 'absolute', bottom: '60px', left: '20px' }}>
            <Button color='warning' size='small' onClick={Addmenu}>Add</Button>
          </div>
        </div>
    );
  };
  
  export default ResMenu