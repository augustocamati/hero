import  { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { FiArrowLeft } from "react-icons/fi"

import api from '../../services/api'
import "./styles.css"

import logoImg from "../../assets/logo.svg"

export default function Register() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [number, setNumber] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  async function handleRegister(e) {
    e.preventDefault()

    const data = {
      name,
      email,
      number,
      password,
    }

    try {
      const response = await api.post('ongs', data)
      console.log('response', response.data)
      alert(`cadastrado com sucesso ${response.data.name}`)
 
    navigate('/')
    } catch (err) {
      alert("Erro no cadastro, tente novamente")
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />
          <h1> Cadastro </h1>
          <p>
            {" "}
            Faça seu cadastro, entre na plataforma e ajude a encontrarem as pessoas da sua cidade.{" "}
          </p>
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#e02041" />
             Tenho cadastro
          </Link>
        </section>
        <form onSubmit={handleRegister}>
          <input
            placeholder="Nome da ONG"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Nº de telefone / WhatsApp"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* <div className="input-group"> */}
          {/* <input placeholder="UF"  style={{ width: 80 }} /> */}
          {/* </div> */}
          <button className="button" type="submit">
            {" "}
            Cadastrar{" "}
          </button>
        </form>
      </div>
    </div>
  )
}
