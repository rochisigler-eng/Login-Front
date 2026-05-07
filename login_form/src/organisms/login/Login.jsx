import styles from './Login.module.scss'
import Input from '../../molecules/input/Input'
import Button from '../../molecules/button/Button'
import RocketIcon from '../../assets/rocketIcon'

const Login = () => {
  return (
    <form className={styles.loginForm}>
      <Input text="Email"  id="email" placeholder="Ingresa tu email" type="email"/>
      <Input text="Contraseña"  id="password" placeholder="Ingresa tu contraseña" type="password"/>
      <p>¿Olvidaste tu contraseña?</p>
      <Button text="Ingresar" icon={RocketIcon} />
      <p>¿Todavía no tenés cuenta?</p>
      <p>Regístrate</p>
    </form>
  )
}

export default Login