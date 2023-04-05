import './style.scss'
export default function Button({ onclick, title }) {
  return <button onClick={onclick}>{title}</button>
}
