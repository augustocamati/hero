import { useState, useEffect } from 'react'
 import { Link, useNavigate } from "react-router-dom"
import { FiPower, FiTrash2 } from "react-icons/fi"

import api from '../../services/api'

import "./styles.css"

import logoImg from "../../assets/logo.svg"
import Img from "../../../../pyscript/Images/1712877110363angry.jpg"

export default function Profile() {
  // const incidents = [
  //   {
  //     id: 1,
  //     name: "augusto",
  //     description: "lorem ipsum",
  //     contact: 12,
  //   },
  //   {
  //     id: 12,
  //     name: "augusto",
  //     description: "lorem ipsum",
  //     contact: 923934873,
  //   },
  //   {
  //     id: 13,
  //     name: "augusto",
  //     description: "lorem ipsum",
  //     contact: 923934873,
  //   },
  //   {
  //     id: 14,
  //     name: "augusto",
  //     description: "lorem ipsum",
  //     contact: 923934873,
  //   },
  // ]

  const [incidents, setIncidents] = useState([])
   const navigate = useNavigate();
  const ongId = localStorage.getItem('ongId')
  const ongName = localStorage.getItem('ongName')

  useEffect(() => {
    if (!ongId) navigate("/logon")
  }, [ongId,navigate])
  useEffect(() => {
  
    api
      .get("profile", {
        headers: {
          Authorization:"43913b2d"// ongId,
        },
      })
      .then((response) => {
        setIncidents(response.data)
        console.log("first", response.data)
      })
  }, [ongId])


  async function handleDeleteIncident(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: "43913b2d", //ongId,
        },
      })

      setIncidents(incidents.filter(incident => incident.id !== id))
      alert("CASO DELETADO COM SUCESSO")
    } catch (err) {
      alert('Erro ao deletar caso, tente novamente.')
    }
  }

  function handleLogout() {
    localStorage.clear()
    navigate("/")
    alert("sessão fechada")
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be The Hero" />
        <span> Bem-vindo, {ongName} </span>

        <Link className="button" to="/incidents/new">
          {" "}
          Cadastrar novo caso{" "}
        </Link>
        <button type="button" onClick={handleLogout}>
          <FiPower size={18} color="e02041" />
        </button>
      </header>
      <h1> Casos Cadastrados </h1>
      <ul>
        {incidents.map((incident) => (
          <li key={incident.id}>
            <div>
              {" "}
              {/* {`../../../../pyscript/Images${incident.image_path}`} */}
              <img
                src={Img}
                alt=""
                className="image"
              />
            </div>
            <strong> Nome: </strong>
            <p> {incident.title} </p>

            <strong> DESCRIÇÃO: </strong>
            <p> {incident.description} </p>

            <strong> Contactos: </strong>
            <p> {incident.value} </p>
            <strong> Image Name: </strong>
            <p> {incident.image_path} </p>

            <button
              onClick={() => handleDeleteIncident(incident.id)}
              type="button"
            >
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
