import styles from './SimpleCard.module.scss'
import Check from '../../../../assets/Check'

const SimpleCard = ({ card }) => {
  const Icon = card.icon

  return (
    <div className={styles.simpleCard}>
      <div className={styles.cardHeader}>
        <div className={styles.cardIcon}>
          <Icon />
        </div>
        <div className={styles.cardInfo}>
          <p>{card.title}</p>
          <p className={styles.cardPara}>{card.subtitle}</p>
        </div>
      </div>
      <hr style={{ border: "none", backgroundColor: "#888" }} />
      <p style={{ color: "white", fontSize: ".8rem" }}>{card.description}</p>
      <div className={styles.greenCard}>
        <Check />
        <p>{card.information}</p>
      </div>
    </div>
  )
}

export default SimpleCard