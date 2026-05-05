import Title from "../../atoms/title/Title"
import Subtitle from "../../atoms/subtitle/Subtitle"
import Icon from "../../atoms/icon/Icon"
import styles from './Header.module.scss'
import icon from '../../assets/icon.png'

const Header = () => {
  return (
    <div className={styles.header}>
        <Icon src={icon} alt="libro planeta icon" width="9rem" height="6rem"/>
        <div className={styles.titleHeader}>
            <Title title="Libro" span="Planeta" />
            <Subtitle text="descubrí tu próximo libro"/>
        </div>
    </div>
  )
}

export default Header