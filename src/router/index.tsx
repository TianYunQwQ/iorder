import React, { useEffect, useState } from 'react'
import { useRoutes, Navigate } from 'react-router-dom'
import Home from '@/views/home'
import PersonalCenter from '@/views/my'
import Layout from '@/views/Layout'
import Login from '@/views/login/Login'
import { useStore } from '@/store';
import Entrance from '@/views/entrance'
import Profile from '@/components/ProfileEdit'
import Pwdchange from '@/components/pwdchange'
import CreateAccount from '@/components/CreateAccount'
import LayoutRes from '@/views/LayoutRes'
import ResOrder from '@/views/resOrderList'
import ResMenu from '@/views/restaurantMenu'
import AddMenu from '@/components/AddMenu'
import Menu from '@/views/menu'
import Orders from '@/views/orderlist'
import AddRestaurant from '@/components/AddRestaurant'
import ChangeMenu from '@/components/ChangeMenu'
import Qrcode from '@/views/Qrcode'

const Router: React.FC = React.memo(() => {
  const { token } = useStore();
  const [firstVisit, setFirstVisit] = useState(true);
  useEffect(() => {
    if (firstVisit) {
      setFirstVisit(false);
    }
  }, [firstVisit]);

  const element = useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: firstVisit ? (
            <Navigate to="/entrance" replace />
          ) : token !== '' ? (
            <Navigate to="/home" replace />
          ) : (
            <Navigate to="/login" />
          ),
        },
        {
          path: 'home',
          element: <Home />,
        },
        {
          path: 'menu/:shop_index',
          element: <Menu />,
        },
        {
          path: 'orderlist',
          element: <Orders />,
        },
        {
          path: 'me',
          element: <PersonalCenter />,
        },
      ],
    },

    {
      path: '/restaurant',
      element: <LayoutRes />,
      children: [
        {
          path: '/restaurant',
          element:  token !== '' ? (
            <Navigate to="/order" replace />
          ) : (
            <Navigate to="/login" />
          ),
        },
        {
          path: 'resorder',
          element: <ResOrder />,
        },
        {
          path: 'resmenu',
          element: <ResMenu />,
        },
        {
          path: 'me',
          element: <PersonalCenter />,
        },
      ],
    },
    {
      path: 'login',
      element: <Login />,
    },

    {
      path: 'entrance',
      element: <Entrance />,
    },

    {
      path: 'profile',
      element: <Profile />
    },

    {
      path: 'passward',
      element:<Pwdchange />
    },

    {
      path: 'account',
      element:<CreateAccount />
    },


    {
      path: 'resmenu',
      element:<ResMenu />
    },

    {
      path: 'resorder',
      element:<ResOrder />
    },

    {
      path: 'addmenu/:username',
      element:<AddMenu/>
    },

    {
      path: 'changemenu/:dish_index',
      element:<ChangeMenu/>
    },

    {
      path: 'addrestaurant',
      element:<AddRestaurant/>
    },

    {
      path:'qrcode',
      element:<Qrcode/>
    }
  ])

  return element
})

export default Router
