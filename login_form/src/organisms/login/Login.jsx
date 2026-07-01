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
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../hooks/useAuth'

const Login = () => {
  const { setAccessToken } = useAuth();
  const [isSubmitted, setIsSubmitted] = useState(false)
  // reemplazar estos estados por lo que viene del back
  const [hasInvalidCredentials, setHasInvalidCredentials] = useState(false)
  const [displayInvalidCredentials, setDisplayInvalidCredentials] = useState(false)

  const [loginData, setLoginData] = useState({
    "email": "",
    "password": ""
  })
  const [loading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")
  const navigate = useNavigate()



  const handleSubmit = async (e) => {

    e.preventDefault()

    setIsSubmitted(true)
    setIsLoading(true)

    try {

      const response = await fetch(
        'http://localhost:3000/auth/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: "include",
          body: JSON.stringify(loginData)
        })

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message)
      }

      const data = await response.json();

      setAccessToken(data.accessToken)

      console.log("antes de navegar");

      navigate('/dashboard')
      // guardar el refreshcookie

    } catch (error) {
      setMessage(error.message)
    } finally {
      setIsLoading(false)
    }
  }


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
        <Button id="loginButton" text="Ingresar" icon={RocketIcon} />
      </form>
      <div className={styles.registerLink}>
        <p>¿Todavía no tenés cuenta?</p>
        <a href="/register" className={styles.registerText}>Regístrate <RightArrow /> </a>
      </div>
    </section>
  )
}

export default Login