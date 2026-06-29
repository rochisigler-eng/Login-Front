import styles from './Login.module.scss'
import LoginInput from '../../molecules/login_input/LoginInput'
import Button from '../../molecules/button/Button'
import RocketIcon from '../../assets/RocketIcon'
import LogHeader from '../../molecules/log-header/LogHeader'
import Envelope from '../../assets/Envelope'
import Lock from '../../assets/Lock'
import Eye from '../../assets/Eye'
import EyeSlash from '../../assets/EyeSlash'
import RightArrow from '../../assets/RightArrow'
import { useEffect, useState } from 'react'
import LoginFailure from '../../molecules/login_fail/LoginFailure'

const Login = () => {
  const [isExistingUser, setIsExistingUser] = useState(false)
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [hasInvalidCredentials, setHasInvalidCredentials] = useState(true)
  const [displayInvalidCredentials, setDisplayInvalidCredentials] = useState(true)
  const [loginData, setLoginData] = useState({
    "email": "",
    "password": ""
  })
  const [loading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitted(true)
    setIsLoading(true)
    try {
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
      })
      if (!response.ok) {
        throw new Error(`Server responded with status: ${response.status}`);
      }
      const result = await response.json();
    } catch (error) {
      throw new Error(result.message)
    } finally {
      setIsLoading(false)
    }
  }

  console.log(displayInvalidCredentials)

  return (
    <section className={styles.loginCard}>
      <LogHeader title="Iniciar sesión" text="Bienvenido a Libro Planeta" />
      {hasInvalidCredentials && displayInvalidCredentials ?
        <LoginFailure />
        :
        null
      }
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <LoginInput text="Email" id="email" placeholder="Ingresa tu email" type="email" icon={Envelope} setLoginData={setLoginData} loginData={loginData} />
        <LoginInput text="Contraseña" id="password" placeholder="Ingresa tu contraseña" type="password" icon={Lock} setLoginData={setLoginData} loginData={loginData} />
        <div className={styles.forgotPassword}>
          <a href="" className={styles.forgotText} onClick={() => alert("Jodete")}>¿Olvidaste tu contraseña?</a>
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