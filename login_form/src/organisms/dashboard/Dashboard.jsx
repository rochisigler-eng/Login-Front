import DashHeader from '../../molecules/dashboard/dash-header/DashHeader'
import DashFooter from '../../molecules/dashboard/dash-footer/DashFooter'
import Bienvenida from '../../molecules/dashboard/bienvenida/Bienvenida'
import DashboardInfo from '../../molecules/dashboard-info/DashboardInfo'
import styles from './Dashboard.module.scss'
import { useEffect } from 'react'
import { useAuth } from '../../hooks/useAuth'

const Dashboard = () => {
  const { accessToken } = useAuth()

  useEffect(() => {
    // get /dashboard. Authorization Bearer token
    axios.get('./dashboard', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }, [])
  })

  return (
    <div className={styles.dashboardComponent}>
      <DashHeader />
      <div className={styles.main}>
        <Bienvenida className={styles.welcome} />
        <DashboardInfo />
      </div>
      <DashFooter />
    </div>
  )
}

export default Dashboard