import { FC } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  AppOutline,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons'
import { TabBar } from 'antd-mobile'
const Bottom: FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { pathname } = location

  const setRouteActive = (value: string) => {
    navigate(value)
  }

  const tabs = [
    {
      key: '/home',
      title: 'Home',
      icon: <AppOutline />,
    },
    {
      key: '/todo',
      title: 'Menu',
      icon: <UnorderedListOutline />,
    },
    {
      key: '/me',
      title: 'Profile',
      icon: <UserOutline />,
    },
  ]

  return (
    <TabBar activeKey={pathname} onChange={(value) => setRouteActive(value)}>
      {tabs.map((item) => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
      ))}
    </TabBar>
  )
}

export default Bottom
