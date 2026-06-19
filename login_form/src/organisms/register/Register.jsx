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
import ValidateMessage from "../../atoms/error/ValidateMessage"
import styles from './Register.module.scss'
import { useEffect, useState } from "react"

const Register = () => {
  const [pass, setPass] = useState("")
  const [validationDisplay, setValidationDisplay] = useState(false)
  const [disabled, setDisabled] = useState(true)
  const [passwordsMatch, setPasswordsMatch] = useState(false)
  const [matchDisplay, setMatchDisplay] = useState(false)
  const [isValid, setIsValid] = useState({
    validUsername: false,
    validEmail: false,
    validDate: false,
    validAddress: false,
    validPassword: false
  })
  const [isValidForm, setIsValidForm] = useState(false)
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

  useEffect(() => {
    if (formData.password === "") return

    if (formData.password === formData.passwordRepeat) {
      setPasswordsMatch(true)
    } else {
      setPasswordsMatch(false)
    }
  }, [formData.passwordRepeat])

  const isValidForm = () => {
    if (Object.values(isValid).every((value) => value === true)) {
      setIsValidForm(true)
    }
  }

  console.log(formData, passwordsMatch)
  return (
    <section className={styles.registerCard}>
      <LogHeader title="Crear cuenta" text="Sumate a la comunidad de Libro Planeta" />

      <form className={styles.registerForm} onSubmit={handleSubmit}>
        <Input text="Nombre y apellido" id="username" placeholder="Ingresa tu nombre y apellido" type="text" icon={User} formData={formData} setFormData={setFormData} setIsValid={setIsValid} />
        <div className={styles.flexInputs}>
          <Input text="Fecha de Nacimiento" id="birth" placeholder="" type="date" icon={Calendar} formData={formData} setFormData={setFormData} setIsValid={setIsValid} />
          <Input text="Email" id="email" placeholder="Ingresa tu email" type="email" icon={Envelope} formData={formData} setFormData={setFormData} setIsValid={setIsValid} />
        </div>
        <Input text="Dirección" id="address" placeholder="Ingresa tu dirección" type="text" icon={MapPin} formData={formData} setFormData={setFormData} setIsValid={setIsValid} />

        <Input text="Contraseña" id="password" placeholder="Crea una contraseña" type="password" icon={Lock} formData={formData} setFormData={setFormData} setValidationDisplay={setValidationDisplay} setIsValid={setIsValid} />
        {validationDisplay ?
          <PasswordValidation formData={formData} setDisabled={setDisabled} setFormData={setFormData} />
          : null
        }

        <Input text="Confirmar contraseña" id="passwordRepeat" placeholder="Repetí tu contraseña" type="password" icon={Lock} formData={formData} setFormData={setFormData} disabled={disabled} setIsValid={setIsValid} />
        {
          !disabled ?
            <ValidateMessage passwordsMatch={passwordsMatch} />
            :
            null
        }
        <Button text="Crear Cuenta" icon={RocketIcon} id="registerButton" isValidForm={isValidForm} />
      </form>

      <div className={styles.loginLink}>
        <p>¿Ya tenés cuenta?</p>
        <a href="/login" className={styles.loginText}>Iniciá sesión <RightArrow /> </a>
      </div>
    </section>
  )
}

export default Register