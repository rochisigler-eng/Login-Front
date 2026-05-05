import styles from './R01LoginForm.module.scss'
import Header from '../molecules/header/Header'
import Footer from '../molecules/footer/Footer'

const R01LoginForm = ({ children }) => {
  return (
    <div className={styles.loginLayout}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default R01LoginForm