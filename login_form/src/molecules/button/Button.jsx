import styles from './Button.module.scss'

const Button = ({text, icon: Icon}) => {
  return (
    <button type="submit" className={styles.submitButton}>
        {text}
        <Icon />
        </button>
  )
}

export default Button