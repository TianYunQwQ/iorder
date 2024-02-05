import { NavBar } from 'antd-mobile'
import Bottom from '@/Buttom'
import styles from './layout.module.scss'
import { useStore } from '@/store'
import { Outlet } from 'react-router-dom'

function Layout() {
  const { userInfo } = useStore()
  return (
    <>
      <div className={styles.app}>
        <div className={styles.top}>
          <NavBar back={null}>配合路由使用 {userInfo.userName}</NavBar>
        </div>
        <div className={styles.body}>
          <Outlet />
        </div>
        <div className={styles.bottom}>
          <Bottom />
        </div>
      </div>
    </>
  )
}

export default Layout
