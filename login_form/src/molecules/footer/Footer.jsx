import Text from "../../atoms/text/Text"
import Icon from "../../atoms/icon/Icon"
import planetIcon from "../../assets/planetIcon.png"
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.footer}>
        <Icon src={planetIcon} alt="Icono de planeta" width="4rem" height="3rem" />
        <Text text="Explorá. Descubrí. Leé." size="1.2rem" color="#ffffff" />
        <Text text="Tu próxima aventura comienza acá" size=".8rem" color="#E2E8F0" />
    </div>
  )
}

export default Footer