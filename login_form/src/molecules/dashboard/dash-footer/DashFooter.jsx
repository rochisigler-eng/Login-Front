import Text from "../../../atoms/text/Text"
import styles from "./DashFooter.module.scss"
import starIcon from "../../../assets/starIcon.png"
import planetIcon from "../../../assets/planetIcon.png"

const DashFooter = () => {
  return (
    <div className={styles.dashFooter}>
      <div className={styles.footerPara}>
        <img src={planetIcon} alt="planet icon" className={styles.planetIconFooter} />
        <Text text="Seguí explorando. Tu próxima aventura comienza acá." />
        <img src={starIcon} alt="star icon" className={styles.starIconFooter} />
      </div>
      <Text text="&copy; Libro Planeta. Todos los derechos reservados." />
    </div>
  )
}

export default DashFooter