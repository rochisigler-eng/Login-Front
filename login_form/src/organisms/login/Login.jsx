import styles from './Login.module.scss'
import Input from '../../molecules/input/Input'
import Button from '../../molecules/button/Button'
import RocketIcon from '../../assets/RocketIcon'
import LogHeader from '../../molecules/log-header/LogHeader'
import Envelope from '../../assets/Envelope'
import Lock from '../../assets/Lock'
import Eye from '../../assets/Eye'
import EyeSlash from '../../assets/EyeSlash'
import RightArrow from '../../assets/RightArrow'

const Login = () => {
  return (
    <section className={styles.loginCard}>
      <LogHeader title="Iniciar sesión" text="Bienvenido de nuevo a Libro Planeta"/>

      <form className={styles.loginForm}>
        <Input text="Email" id="email" placeholder="Ingresa tu email" type="email" icon={Envelope} />
        <Input text="Contraseña" id="password" placeholder="Ingresa tu contraseña" type="password" icon={Lock} />
        <div className={styles.forgotPassword}>
          <a href="" className={styles.forgotText}>¿Olvidaste tu contraseña?</a>
        </div>
        <Button text="Ingresar" icon={RocketIcon} />
      </form>
      <div className={styles.registerLink}>
        <p>¿Todavía no tenés cuenta?</p>
        <a href="/register" className={styles.registerText}>Regístrate <RightArrow /> </a>
      </div>
    </section>
  )
}

export default Login