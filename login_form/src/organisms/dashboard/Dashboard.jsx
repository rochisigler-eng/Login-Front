import DashHeader from '../../molecules/dashboard/dash-header/DashHeader'
import DashFooter from '../../molecules/dashboard/dash-footer/DashFooter'
import Bienvenida from '../../molecules/dashboard/bienvenida/Bienvenida'
import DashboardInfo from '../../molecules/dashboard-info/DashboardInfo'
import styles from './Dashboard.module.scss'

const Dashboard = ({ accessToken }) => {
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