import styles from './Bienvenida.module.scss'
import starIcon from '../../../assets/starIcon.png'
import Title from '../../../atoms/title/Title'
import Title2 from '../../../atoms/Title2'
import Title3 from '../../../atoms/Title3'
import icon from '../../../assets/icon.png'

const Bienvenida = ({ className }) => {
  return (
    <div className={className}>
      <div className={styles.welcomeImage}>
        <img src={icon} alt="icono libro planeta" className={styles.welcomeIcon}/>
      </div>
      <div className={styles.welcomeInfo}>
        <div className={styles.welcomePara}>
          <img src={starIcon} alt="star icon" className={styles.welcomeStarIcon}/>
          <Title title="Bienvenido/a Mushu Potato!"/>
          <span className={styles.welcomeSpan}>&#x1F44B;</span>
        </div>
        <Title2 text="Tu sesión fue iniciada correctamente."/>
        <hr style={{border: "none",height: "1px", backgroundColor: "#555"}}/>
        <Title3 text="Explorá tu espacio personal en Libro Planeta."/>
      </div>
    </div>
  )
}

export default Bienvenida