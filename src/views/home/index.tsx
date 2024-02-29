import { useEffect } from 'react'
import api from '@/api'
import {useHistoryStore, useShopStore} from '@/store'
import { Image, List } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  const Click = (shop_index:number) => {
    navigate(`/menu/${shop_index}`)
  }
  const {ShopList, setShop} = useShopStore()
  useEffect(() => {
    const getData = async() => {
      try {
        const response = await api.getShop(); 
        console.log(response)
        setShop(response.list);
      } catch (error) {
        console.error('Error fetching history:', error)
      }
    }
    getData()
  }, [setShop])

  return (
    <List header={ <span style={{ fontWeight: 'bold', fontStyle: 'italic', color: 'black', fontSize: '20px' }}>Restaurant</span>} style={{ width: '100%' }} mode='card'>
    {ShopList.map(restaurant => (
      <List.Item
        key={restaurant.shop_index}
        prefix={
          <Image
            src={"http://51.20.236.228:8000/"+restaurant.image}
            style={{ borderRadius: 20 }}
            fit='cover'
            width={80}
            height={80}
          />
        }
        description={restaurant.description}
        onClick={() => Click(restaurant.shop_index)}
      >
        {restaurant.shop_name}
      </List.Item>
    ))}
  </List>
  )
}

export default Home