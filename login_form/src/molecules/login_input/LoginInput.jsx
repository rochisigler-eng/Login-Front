import { useState } from 'react'
import styles from '../input/Input.module.scss'
import EyeSlash from '../../assets/EyeSlash'
import Eye from '../../assets/Eye'
import Text from '../../atoms/text/Text'

const LoginInput = ({ text, id, placeholder, type, icon: Icon, setLoginData, loginData }) => {
    const [showPassword, setShowPassword] = useState(false)
    const isPassword = type === 'password'

    const handleChange = (e) => {
        const { name, value } = e.target
        setLoginData((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    return (
        <div className={styles.inputGroup}>
            <label htmlFor={id}><Text text={text} /></label>
            <div className={styles.inputWrapper}>

                {Icon && <Icon />}

                <input
                    type={isPassword && showPassword ? 'text' : type}
                    id={id}
                    placeholder={placeholder}
                    name={id}
                    value={loginData[id]}
                    onChange={handleChange}
                />

                {isPassword && (
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className={styles.eyeButton}
                    >
                        {showPassword ? <Eye /> : <EyeSlash />}
                    </button>
                )}

            </div>
        </div>
    )
}

export default LoginInput