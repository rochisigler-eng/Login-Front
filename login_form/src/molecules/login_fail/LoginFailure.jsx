import styles from './LoginFailure.module.scss'
import { useState } from 'react'

const LoginFailure = ({ }) => {
    return (
        <div className={styles.loginFailure}>
            <div className={styles.closeLoginFail} >&times;</div>
            <h3 className={styles.loginFailTitle}>Credenciales incorrectas</h3>
            <p>Nombre de usuario o contraseña no válidos</p>
        </div>
    )
}

export default LoginFailure