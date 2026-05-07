import styles from './Input.module.scss'
import Text from '../../atoms/text/Text'

const Input = ({text, size, id, placeholder, type}) => {
  return (
    <div className={styles.input}>
    <label htmlFor={id}>
      <Text text={text} />
    </label>
    <input type={type} id={id} placeholder={placeholder} name={id}/>
    </div>
  )
}

export default Input