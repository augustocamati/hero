import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { FiLogIn } from "react-icons/fi"

import api from "../../services/api"

import "./styles.css"

import logoImg from "../../assets/logo.svg"

export default function Incidents() {
 
  const [incidents, setIncidents] = useState([])
  const navigate = useNavigate()
 
  useEffect(() => {
    api.get("incidents").then((response) => {
      setIncidents(response.data)
    })
  }, [])

  

  function handleLogout() {
    navigate("/logon")
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be The Hero" />
        <span>
          {" "}
          Bem-vindo a nossa plataforma onde ajudamos a encontrar os seus entes
          queridos{" "}
        </span>

        <Link className="button" to="/search">
          {" "}
          Inserir fotografia{" "}
        </Link>
        <button type="button" onClick={handleLogout}>
          <FiLogIn size={18} color="e02041" />
        </button>
      </header>
      <h1> Casos Cadastrados </h1>
      <ul>
        {incidents.map((incident) => (
          <li key={incident.id}>
            <img
              src={`http://localhost:5173/@fs/C:/Users/AugustoAC/Documents/projetos/hero/frontend/src/Images/${incident.image_path}`}
              alt="Be The Hero"
            />
            <strong> Nome: </strong>
            <p> {incident.title} </p>

            <strong> DESCRIÇÃO: </strong>
            <p> {incident.description} </p>

            <strong> Contactos: </strong>
            <p> {incident.value} </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
