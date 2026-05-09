import DashHeader from '../../molecules/dashboard/dash-header/DashHeader'
import DashFooter from '../../molecules/dashboard/dash-footer/DashFooter'
import Bienvenida from '../../molecules/dashboard/bienvenida/Bienvenida'
import Cuenta from '../../molecules/dashboard/cuenta/Cuenta'
import Perfil from '../../molecules/dashboard/perfil/Perfil'
import Actividad from '../../molecules/dashboard/actividad/Actividad'
import Technologies from '../../molecules/dashboard/tecnologias/Technologies'
import styles from './Dashboard.module.scss'

const Dashboard = () => {
  return (
    <div className={styles.dashboardComponent}>
      <DashHeader />
      <div className={styles.main}>
      <Bienvenida className={styles.welcome}/>
      <Cuenta className={styles.cuenta}/>
      <Perfil className={styles.perfil} />
      <Actividad className={styles.actividad}/>
      <Technologies className={styles.technologies}/>
      </div>
      <DashFooter />
    </div>
  )
}

export default Dashboard