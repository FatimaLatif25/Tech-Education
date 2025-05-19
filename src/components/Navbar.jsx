import { Menubar } from "primereact/menubar"
import logo from "../assets/images/logo.png"
import { Button } from "primereact/button"
import { useContext, useState } from "react"
import AuthContext from "../contexts/AuthContext"
import { useNavigate } from "react-router-dom"

function Navbar() {
  const { isAuthnticated, setIsAuthenticated } = useContext(AuthContext)
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('user')
    setIsAuthenticated(false)
    navigate('/login')

  }
  const menuItems = [
    {
      label: "Home",
      icon: "pi pi-home",
      command: ()=> navigate('/')
    },
    {
      label: "About",
      icon: "pi pi-info-circle",
       command: ()=> navigate('/about')
    },
    {
      label: "Contact",
      icon: "pi pi-envelope",
       command: ()=> navigate('/contact')
    },
  ]

  const start = (
    <div className="flex justify-center items-center">
      <img src={logo} alt="logo" className="h-8 mr-2" />
      <span className="text-xl font-bold hidden sm:inline">Tech Education</span>
    </div>
  )

  const end = (
    <div className="flex justify-end items-center">
      <Button
        label= 'Logout'
        onClick={logout}
        pt={{
          label: {
            className:
              "text-lg font-bold bg-white text-blue-400 px-4 py-1 rounded-md",
          },
        }}
      />

    </div>
  )

  return (
    <>
      <div className="">
        <Menubar
          model={menuItems}
          start={start}
          end={end}
          pt={{
            root: {
              className:
                "flex justify-between bg-blue-500 text-white p-4 shadow-md",
            },
            menuitem: { className: "px-4" },
            action: {
              className:
                "flex items-center gap-1 text-white hover:text-blue-700",
            },   //This is the container of icon+label
            icon: { className: "text-lg text-white" }, 
            label: { className: "text-lg font-semibold text-white" }
          }}
        />
      </div>
    </>
  )
}

export default Navbar
