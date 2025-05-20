import { Navigate } from "react-router-dom"
import { useContext } from "react"
import AuthContext from "../contexts/AuthContext"

function ProtectedRoutes({ children }) {
  const { isAuthenticated } = useContext(AuthContext)

  return isAuthenticated ? children : <Navigate to="/login" />
}

export default ProtectedRoutes
