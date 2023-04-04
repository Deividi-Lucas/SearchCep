export default function ({ placeholder, onChange, onKeyUp, type }) {
  return (
    <input
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      onKeyUp={onKeyUp}
    ></input>
  )
}
