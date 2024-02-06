import React, { useEffect } from 'react'
import api from '@/api'
import {useHistoryStore} from '@/store'
import { Image, List } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  const Click = () => {
    navigate('/todo')
  }
  const {historyList, setHistory} = useHistoryStore()
  useEffect(() => {
    const getData = async() => {
      try {
        const response = await api.getHistory();
        setHistory(response.list);
      } catch (error) {
        console.error('Error fetching history:', error)
      }
    }
    getData()
  }, [setHistory])

  return (
    <List header='History' style={{ width: '100%' }} mode='card'>
    {historyList.map(users => (
      <List.Item
        key={users.name}
        prefix={
          <Image
            src={users.logo}
            style={{ borderRadius: 20 }}
            fit='cover'
            width={80}
            height={80}
          />
        }
        description={users.orderTime}
        onClick={Click}
      >
        {users.name}
      </List.Item>
    ))}
  </List>
  )
}

export default Home