import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { FiArrowLeft } from "react-icons/fi"

import api from "../../services/api"
import "./styles.css"

import logoImg from "../../assets/logo.svg"

// import UpLoadMain from "../../uploadComponent/upLoadMain"
 
export default function Search() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState([])
  const [value, setValue] = useState("")
  const [path, setPath] = useState("")
  const [image, setImage] = useState("")

  useNavigate()

  
  async function handleNewIncident(e) {
    e.preventDefault()
   try {
   
      const data = new FormData()
      data.append("file", image)
      const response = await api.post("/incidents/search", data)

      setTitle(response.data.title)
      setDescription(response.data.description)
      setValue(response.data.value)
      setPath(response.data.image_path)
      
      console.log('response', response) 
      

   
      alert("SUCESSO: Rosto encontrado")
    } catch (err) {
      alert(
      
        err.response.data.message
      )
      console.log('err', err.response.data.message)
    }
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <h1> Pesquisar Novo Caso </h1>
          {path ? (
            <img
              src={`http://localhost:5173/@fs/C:/Users/AugustoAC/Documents/projetos/hero/frontend/src/Images/${path}`}
              alt="Be The Hero"
            /> 
          ) : (
            <img src={logoImg} alt="Be The Hero" />
          )}

          {/* <p> Descreva o caso detalhadamente para encontrar um herói. </p> */}
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para Home
          </Link>
        </section>
        <form className="field" onSubmit={handleNewIncident}>
          <input
            placeholder="Nome da pessoa Desaparecida"
            value={title}
            readOnly
          />
          
          <textarea
            placeholder="Descrição do caso"
            value={description}
            readOnly
          />

          <input placeholder="Contacto" value={value} readOnly />
          <div className="drop-area">
            <strong>Adicione a fotografia</strong>

            <input
              type="file"
              name="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>

          <button className="button" type="submit">
            {" "}
            Pesquisar{" "}
          </button>
        </form>
      </div>
    </div>
  )
}
