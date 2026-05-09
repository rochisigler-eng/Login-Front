import Text from "../../atoms/text/Text"
import Icon from "../../atoms/icon/Icon"
import planetIcon from "../../assets/planetIcon.png"
import styles from './Footer.module.scss'
import Title3 from "../../atoms/Title3"

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <Icon src={planetIcon} alt="Icono de planeta" width="4rem" height="3rem" />
        <Title3 text="Explorá. Descubrí. Leé."/>
        <Text text="Tu próxima aventura comienza acá" size=".8rem" color="#E2E8F0" />
    </footer>
  )
}

export default Footer