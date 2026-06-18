import { useEffect, useState } from 'react'
import styles from './PasswordValidation.module.scss'

const PasswordValidation = (formData) => {
    const [passStates, setPassStates] = useState({
        lower: false,
        upper: false,
        number: false,
        special: false,
        minlength: false
    })

    useEffect(() => {
        const hasLower = /(?=.*?[a-z])/.test(formData.formData.password);
        const hasUpper = /(?=.*?[A-Z])/.test(formData.formData.password);
        const hasNumber = /(?=.*?[0-9])/.test(formData.formData.password);
        const hasSpecial = /(?=.*?[@$!%*?&.-])/.test(formData.formData.password);
        const hasMinLength = /^.{8,}$/.test(formData.formData.password);

        setPassStates({
            lower: hasLower,
            upper: hasUpper,
            number: hasNumber,
            special: hasSpecial,
            minlength: hasMinLength
        })

    }, [formData.formData.password])

    console.log(passStates)

    return (
        <div className={styles.passChecks}>
            <div>
                <p>
                    {passStates.minlength ? (
                        <span>&#9989; </span>
                    ) : (
                        <span>&#10060; </span>
                    )
                    }
                    8 characters long
                </p>
                <p>
                    {passStates.lower ? (
                        <span>&#9989; </span>
                    ) : (
                        <span>&#10060; </span>
                    )
                    }
                    One lowercase letter
                </p>
                <p>
                    {passStates.upper ? (
                        <span>&#9989; </span>
                    ) : (
                        <span>&#10060; </span>
                    )
                    }
                    One uppercase letter
                </p>
            </div>
            <div>
                <p>
                    {passStates.number ? (
                        <span>&#9989; </span>
                    ) : (
                        <span>&#10060; </span>
                    )
                    }
                    One number (0-9)
                </p>
                <p>
                    {passStates.special ? (
                        <span>&#9989; </span>
                    ) : (
                        <span>&#10060; </span>
                    )
                    }
                    One special character
                </p>
            </div>
        </div>
    )
}

export default PasswordValidation