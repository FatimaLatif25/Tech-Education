import { Navigate} from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from '../contexts/AuthContext'

function ProtectedRoutes( {children}) {
  const { isAuthenticated } = useContext(AuthContext)

  if(!isAuthenticated) {
    return <Navigate to='/login' replace />
  }

  return children
}

export default ProtectedRoutes
