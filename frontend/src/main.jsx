
import ReactDOM from 'react-dom/client'

import './global.css'
import MainRoutes from './routes.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MainRoutes />
  </BrowserRouter>,
)
