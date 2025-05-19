import Login from "./pages/login"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import ProtectedRoutes from "./components/ProtectedRoutes"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Registration from "./pages/Registration"
import MenuBar from "./components/Navbar"
function App() {
  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={
            <Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoutes>
                <Home />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/about"
            element={
              <ProtectedRoutes>
                <About />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/contact"
            element={
              <ProtectedRoutes>
                <Contact />
              </ProtectedRoutes>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
