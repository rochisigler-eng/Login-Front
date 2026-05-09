import starIcon from '../../assets/starIcon.png'
import Title2 from '../../atoms/Title2'
import Text from '../../atoms/text/Text'
import styles from './LogHeader.module.scss'

const LogHeader = ({title,text}) => {
  return (
    <div className={styles.logHeader}>
      <div className={styles.titleSection}>
        <i
        style={{
          backgroundImage: `url(${starIcon})`,
          display: 'block',
          width: "1.5rem",
          height: "1.5rem",
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}
        ></i>
        <Title2 text={title}/>
      </div>
      <Text text={text}/>
    </div>
  )
}

export default LogHeader