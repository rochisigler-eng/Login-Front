import styles from './Button.module.scss'

const Button = ({ text, icon: Icon, id, isValidForm }) => {
  const renderButton = () => {
    if (id === "registerButton") {
      return <button
        type='submit'
        className={styles.submitButton}
        disabled={!isValidForm ? true : false}
      >{text}<Icon /></button>
    } else if (id === "loginButton") {
      return <button type='submit' className={styles.submitButton}>{text}<Icon /></button>
    }
  }
  return (
    <>
      {renderButton()}
    </>
  )
}

export default Button