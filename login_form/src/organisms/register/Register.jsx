import Input from "../../molecules/input/Input"
import RightArrow from '../../assets/RightArrow'
import User from '../../assets/User'
import Calendar from '../../assets/Calendar'
import Envelope from '../../assets/Envelope'
import MapPin from '../../assets/MapPin'
import Lock from '../../assets/Lock'
import RocketIcon from '../../assets/RocketIcon'
import LogHeader from "../../molecules/log-header/LogHeader"
import Button from "../../molecules/button/Button"
import styles from './Register.module.scss'

const Register = () => {
  return (
    <section className={styles.registerCard}>
      <LogHeader title="Crear cuenta" text="Sumate a la comunidad de Libro Planeta" />

      <form className={styles.registerForm}>
        <Input text="Nombre y apellido" id="username" placeholder="Ingresa tu nombre y apellido" type="email" icon={User} />
        <div className={styles.flexInputs}>
          <Input text="Fecha de Nacimiento" id="birth" placeholder="" type="date" icon={Calendar} />
          <Input text="Email" id="email" placeholder="Ingresa tu email" type="email" icon={Envelope} />
        </div>
        <Input text="Dirección" id="address" placeholder="Ingresa tu dirección" type="text" icon={MapPin} />
        <Input text="Contraseña" id="password" placeholder="Crea una contraseña" type="password" icon={Lock} />
        <Input text="Confirmar contraseña" id="password" placeholder="Repetí tu contraseña" type="password" icon={Lock} />

        <Button text="Crear Cuenta" icon={RocketIcon} />
      </form>
      <div className={styles.loginLink}>
        <p>¿Ya tenés cuenta?</p>
        <a href="/login" className={styles.loginText}>Iniciá sesión <RightArrow /> </a>
      </div>
    </section>
  )
}

export default Register