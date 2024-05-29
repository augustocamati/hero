import { Route, Routes } from "react-router-dom"

import Logon from "./pages/Logon"
import Incidents from "./pages/Incidents"
import Register from "./pages/Register"
import Profile from "./pages/Profile"
import NewIncident from "./pages/NewIncident"
import Search from "./pages/Search"

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" exact Component={Incidents} />
      <Route path="/search"  Component={Search} />
      <Route path="/logon"  Component={Logon} />
      <Route path="/register" Component={Register} />
      <Route path="/profile" Component={Profile} />
      <Route path="/incidents/new" Component={NewIncident} />
    </Routes>
  )
}
