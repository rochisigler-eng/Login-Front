import styles from './Input.module.scss'
import Text from '../../atoms/text/Text'
import Eye from '../../assets/Eye'
import EyeSlash from '../../assets/EyeSlash'
import { useState } from 'react'

const Input = ({ text, size, id, placeholder, type, icon: Icon, setFormData, formData }) => {
  const [showPassword, setShowPassword] = useState(false)
  const isPassword = type === 'password'


  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
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
          value={formData.id}
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

export default Input