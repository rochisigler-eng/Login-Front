

const ValidateMessage = ({ passwordsMatch }) => {

    return (
        <p style={{ color: passwordsMatch ? "green" : "red", fontSize: '.8rem', paddingLeft: '.3rem' }}>
            {passwordsMatch ? (
                "Las contraseñas coinciden"

            ) : (
                "Las contraseñas no coinciden"
            )}
        </p>
    )
}

export default ValidateMessage