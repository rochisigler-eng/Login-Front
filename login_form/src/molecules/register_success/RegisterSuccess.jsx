import Smile from "../../assets/smile"
import RightArrow from "../../assets/RightArrow"
import Tick from "../../assets/Tick"
import styles from './RegisterSuccess.module.scss'

const RegisterSuccess = ({ message }) => {
    return (
        <div className={styles.registerSuccess}>
            <Tick />
            <h1>¡Registro Exitoso!</h1>
            <p>Tu cuenta ha sido creada correctamente.</p>
            <Smile />
            <p>Ahora puedes iniciar sesión y comenzar a disfrutar de todos los beneficios de tu cuenta.</p>
            <p style={{ fontSize: "1.5rem", color: "rgb(60, 214, 60)" }}>{message}</p>
            <a href="/login" className={styles.loginLink}>Ir a iniciar sesión <RightArrow /></a>

        </div>
    )
}

export default RegisterSuccess