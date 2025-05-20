import Navbar from "./Navbar"
import { Outlet } from "react-router-dom"

function AuthLayout() {
  return (
    <>
     <Navbar/>
     <main><Outlet /></main>
    </>
  )
}

export default AuthLayout
