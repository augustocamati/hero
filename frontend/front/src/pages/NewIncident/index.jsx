import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { FiArrowLeft } from "react-icons/fi"

import api from '../../services/api'
import "./styles.css"

import logoImg from "../../assets/logo.svg"
// import UpLoadMain from '../../uploadComponent/upLoadMain'

export default function NewIncident() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')
const [image, setImage] = useState("")

  const navigate = useNavigate()

  const ongId = localStorage.getItem('ongId')

  async function handleNewIncident(e) {
    e.preventDefault()
        const data = {
          title,
          description,
          value,
          image,
        } 
    
    try {
       
    
       const File = new FormData()
       File.append("file", image)
       File.append("title", title)
       File.append("description", description)
       File.append("value", value)
 
      console.log('data', data, ongId)
      await api.post('/incidents', File, { 

        headers: {
          Authorization: ongId//'43913b2d'//ongId,
        }
      })

      navigate('/profile')
      alert("CASO CADASTRADO COM SUCESSO") 

    } catch (err) {
      alert('Erro ao cadastrar caso, tente novamente.')
    }
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          
          <img src={logoImg} alt="Be The Hero" />
          <h1> Cadastrar Novo Caso </h1>
          <p> Descreva o caso detalhadamente para encontrar um herói. </p>
          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para Home
          </Link>
        </section>
        <form onSubmit={handleNewIncident}>
          <input
            placeholder="Nome da pessoa Desaparecida"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Descrição do caso"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            placeholder="Contacto"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <input
            type="file"
            name="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
          {/* <div>
            <UpLoadMain />
          </div> */}
          <button className="button" type="submit">
            {" "}
            Cadastrar{" "}
          </button>
        </form>
      </div>
    </div>
  )
}
