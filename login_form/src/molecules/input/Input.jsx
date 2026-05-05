

const Input = ({text, id, placeholder, type}) => {
  return (
    <>
    <label htmlFor={id}>{text}</label>
    <input type={type} id={id} placeholder={placeholder} name={id}/>
    </>
  )
}

export default Input