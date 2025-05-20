import Login from "./pages/login"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import ProtectedRoutes from "./components/ProtectedRoutes"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Registration from "./pages/Registration"
import AuthLayout from "./components/AuthLayout"
import Form from "./pages/Form"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route
            element={
              <ProtectedRoutes>
                <AuthLayout />
              </ProtectedRoutes>
            }
          >
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/form" element={<Form />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
