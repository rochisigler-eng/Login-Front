import RightArrow from "../../../../assets/RightArrow"
import styles from './DetailsCard.module.scss'

const DetailsCard = ({ card }) => {
    const Icon = card.icon
    const InformationIcon = card.informationIcon

    return (
        <div className={styles.detailsCard}>
            <div className={styles.cardHeader}>
                <div className={styles.cardIcon}>
                    <Icon />
                </div>
                <div className={styles.cardInfo}>
                    <p>{card.title}</p>
                    <p className={styles.cardPara}>{card.subtitle}</p>
                </div>
            </div>

            <ul className={styles.cardList}>
                {card.descriptionItems.map(item => {
                    const DetailIcon = item.icon
                    return (
                        <li key={item.id} className={styles.cardListItem}>
                            <div className={styles.detailInformation}>
                                <DetailIcon />
                                <span>{item.name}</span>
                            </div>
                            <span>{item.descriptionData}</span>
                        </li>
                    )
                })}
            </ul>

            <a className={styles.cardlink}>
                <div className={styles.cardLinkInfo}>
                    <InformationIcon />
                    <p>{card.information}</p>
                </div>
                <RightArrow />
            </a>
        </div>
    )

}

export default DetailsCard