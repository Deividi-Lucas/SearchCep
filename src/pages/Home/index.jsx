import './style.scss'
import Input from '../../components/Input'
import { useState, useEffect } from 'react'
import axios from 'axios'
import PressEnter from '../../utils/PressEnter'

export default function Home() {
  const [cep, setCep] = useState(0)
  const [data, setData] = useState(0)

  function getCep(value) {
    axios
      .get(`https://viacep.com.br/ws/${value}/json/`)
      .then(Response => setCep(Response.data))
  }
  return (
    <div className="main_container">
      <h1>SearchCep</h1>

      <Input
        placeholder="Write your CEP: "
        onChange={e => setData(e.target.value)}
        type="number"
      />

      <span>{cep?.localidade}</span>
      <span>{data}</span>
    </div>
  )
}
