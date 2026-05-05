import styles from './Title.module.scss'

const Title = ({title,span}) => {
  return (
    <h1 className={styles.title}>{title} <span className={styles.titleSpan}>{span}</span></h1>
  )
}

export default Title