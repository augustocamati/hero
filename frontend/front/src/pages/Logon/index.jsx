import  { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { FiLogIn } from "react-icons/fi"

import api from '../../services/api'

import "./styles.css"

import logoImg from "../../assets/logo.svg"

import heroesImg from "../../assets/heroes.png"

export default function Logon() {
  //  const [id, setId] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  async function handleLogin(e) {
    e.preventDefault()
    const data = {
     email,
     password
    }
    try {
      const response = await api.post('sessions', data)

      localStorage.setItem("ongId", response.data.id)
      localStorage.setItem("ongName", response.data.name)
      console.log("email, password", email, password)
     navigate("/profile")
    } catch (err) {
      alert("Falha no login, tente novamente.")
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero" />

        <form onSubmit={handleLogin}>
          <h1> Faça seu Logon </h1>
          <input
            placeholder="Seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Sua Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="button" type="submit">
            {" "}
            Entrar{" "}
          </button>
          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#e02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={heroesImg} alt="Heroes" />
    </div>
  )
}
