import React, { useEffect, useState } from 'react'
import { useRoutes, Navigate } from 'react-router-dom'
import Home from '@/views/home'
import Todo from '@/views/todo'
import Message from '@/views/message'
import PersonalCenter from '@/views/my'
import Layout from '@/views/Layout'
import Login from '@/views/login/Login'
import { useStore } from '@/store';
import Entrance from '@/views/entrance'
import Profile from '@/components/ProfileEdit'
import Pwdchange from '@/components/pwdchange'
import CreateAccount from '@/components/CreateAccount'
import Detail from '@/components/Detail'
import LayoutRes from '@/views/LayoutRes'
import ResOrder from '@/views/resOrderList'
import ResMenu from '@/views/restaurantMenu'
import AddMenu from '@/components/AddMenu'

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
          path: 'todo',
          element: <Todo />,
        },
        {
          path: 'message',
          element: <Message />,
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
      path: 'Detail',
      element:<Detail />
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
      path: 'addmenu/:id',
      element:<AddMenu/>
    }

  ])

  return element
})

export default Router
