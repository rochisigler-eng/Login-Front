import styles from './R01LoginForm.module.scss'

const R01LoginForm = ({children}) => {
  return (
    <div className={styles.login-layout}>
        {children}
    </div>
  )
}

export default R01LoginForm