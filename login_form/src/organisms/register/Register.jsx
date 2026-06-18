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
import PasswordValidation from "../../molecules/password_validation/PasswordValidation"
import styles from './Register.module.scss'
import { useState } from "react"

const Register = () => {
  const [pass, setPass] = useState("")
  const [isValid, setIsValid] = useState(false)
  const [validationDisplay, setValidationDisplay] = useState(false)
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    birth: "",
    address: "",
    password: "",
    passwordRepeat: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const doPasswordsMatch = () => {

  }

  console.log(validationDisplay)
  return (
    <section className={styles.registerCard}>
      <LogHeader title="Crear cuenta" text="Sumate a la comunidad de Libro Planeta" />

      <form className={styles.registerForm} onSubmit={handleSubmit}>
        <Input text="Nombre y apellido" id="username" placeholder="Ingresa tu nombre y apellido" type="text" icon={User} formData={formData} setFormData={setFormData} />
        <div className={styles.flexInputs}>
          <Input text="Fecha de Nacimiento" id="birth" placeholder="" type="date" icon={Calendar} formData={formData} setFormData={setFormData} />
          <Input text="Email" id="email" placeholder="Ingresa tu email" type="email" icon={Envelope} formData={formData} setFormData={setFormData} />
        </div>
        <Input text="Dirección" id="address" placeholder="Ingresa tu dirección" type="text" icon={MapPin} formData={formData} setFormData={setFormData} />
        <div onFocus={() => setValidationDisplay(true)} onBlur={() => setValidationDisplay(false)}>
          <Input text="Contraseña" id="password" placeholder="Crea una contraseña" type="password" icon={Lock} formData={formData} setFormData={setFormData} />
          {formData.password ?
            <PasswordValidation formData={formData} />
            : null
          }
        </div>
        <Input text="Confirmar contraseña" id="passwordRepeat" placeholder="Repetí tu contraseña" type="password" icon={Lock} formData={formData} setFormData={setFormData} />

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