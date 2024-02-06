import styles from './layout.module.scss'
import { useStore } from '@/store'
import { Outlet } from 'react-router-dom'
import ResButtom from '@/ResButtom'

function LayoutRes() {
  const { userInfo } = useStore()
  return (
    <>
      <div className={styles.app}>
        {/* <div className={styles.top}>
          <NavBar back={null}>配合路由使用 {userInfo.userName}</NavBar>
        </div> */}
        <div className={styles.body}>
          <Outlet />
        </div>
        <div className={styles.bottom}>
          <ResButtom />
        </div>
      </div>
    </>
  )
}

export default LayoutRes