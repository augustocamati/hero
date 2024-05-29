import { Route, Routes } from "react-router-dom"

import Logon from "./pages/Logon/index"

import Register from "./pages/Register/index"
import Profile from "./pages/Profile/index"
import NewIncident from "./pages/NewIncident/index"


export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" exact element={<Logon />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/incidents/new" element={<NewIncident />} />
    </Routes>
  )
}
