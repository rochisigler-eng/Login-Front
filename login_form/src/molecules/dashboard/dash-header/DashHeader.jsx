import Icon from "../../../atoms/icon/Icon"
import Title from "../../../atoms/title/Title"
import Subtitle from "../../../atoms/subtitle/Subtitle"
import icon from '../../../assets/icon.png'
import Text from "../../../atoms/text/Text"
import LogOut from "../../../assets/Logout"
import styles from './DashHeader.module.scss'


const DashHeader = () => {
  return (
    <div className={styles.dashHeader}>
      <div className={styles.headerLeft}>
        <Icon src={icon} alt="libro planeta icon" width="6.3rem" height="4.3rem" />
        <div className={styles.titleHeader}>
          <Title title="Libro" span="Planeta" />
          <Subtitle text="descubrí tu próximo libro" />
        </div>
      </div>
      <div className={styles.headerRight}>
        <div className={styles.userInformation}>
          <div className={styles.userAvatar}>M</div>
          <div className={styles.usernameEmail}>
            <Text text="Mushu Potato" />
            <Text text="mushu@potato.com" />
          </div>
        </div>
        <button className={styles.logOut}>
          <LogOut />
          Cerrar Sesión
        </button>
      </div>
    </div>
  )
}

export default DashHeader