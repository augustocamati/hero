import axios from 'axios'

const api = axios.create({
  baseURL: 'https://hero-icre.onrender.com'
})

export default api
