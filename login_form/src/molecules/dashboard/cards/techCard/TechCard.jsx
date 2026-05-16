import styles from './TechCard.module.scss'

const TechCard = ({ card }) => {
  const Icon = card.icon

  return (
    <div className={styles.techCard}>
      <div className={styles.cardHeader}>
        <div className={styles.cardIcon}>
          <Icon />
        </div>
        <div className={styles.cardInfo}>
          <p>{card.title}</p>
          <p className={styles.cardPara}>{card.subtitle}</p>
        </div>
      </div>

      <div className={styles.technologies}>
        {card.tecnologias.map(tech=> {
          return(
            <div className={styles.tech}>
              <div><img src={tech.src} alt="icon"  className={styles.techIcon}/></div>
              <p>{tech.name}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TechCard