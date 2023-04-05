import './style.scss'
import Input from '../../components/Input'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Button from '../../components/Button'

export default function Home() {
  const [cep, setCep] = useState('')
  const [data, setData] = useState(0)

  function getCep() {
    axios
      .get(`https://viacep.com.br/ws/${data}/json/`)
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

      <Button title={'Send'} onclick={getCep} />

      <span>
        {cep?.localidade}
        <br />
        {cep?.uf}
        <br />
        {cep?.bairro}
      </span>
    </div>
  )
}
