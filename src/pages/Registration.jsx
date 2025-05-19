import { useContext, useEffect } from "react"
import AuthContext from "../contexts/AuthContext"
import { Formik, Form } from "formik"
import { useNavigate } from "react-router-dom"
import InpuField from "../components/InpuField"
import { Button } from "primereact/button"
import * as Yup from "yup"

function Registration() {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext)
  const navigate = useNavigate()

  const initialValues = {
    username: "",
    email: "",
    password: "",
  }

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid Email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be contains at least 6 characters")
      .required("Password is required"),
  })

  const handleFormSubmission = (values) => {
    console.log("Form data", values)
    const { username, email, password } = values
    try {
      const existingUser = localStorage.getItem("user")
      if (existingUser && existingUser.email === email) {
        alert("User is already exist")
      }
      const newUser = { username, email, password }
      localStorage.setItem("user", JSON.stringify(newUser))
      navigate("/login")
    } catch (error) {
      alert(error.message)
    }
  }
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="card p-8 w-full max-w-md shadow-2xl border border-blue-400 rounded-md">
          <h1 className="text-xl text-center font-bold text-blue-400 mb-4 p-3 rounded-md">
            Registration Form
          </h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleFormSubmission}
          >
            <Form autoComplete="off">
              <InpuField label="Username" name="username" type="text" />
              <InpuField label="Email" name="email" type="text" />

              <InpuField label="Password" name="password" type="password" />

              <div className="flex justify-center items-center">
                <Button
                  label="Registration"
                  type="submit"
                  pt={{
                    root: {
                      className: "bg-blue-400 w-full p-2 rounded-md mt-2",
                    },
                    label: { className: "text-white text-lg" },
                  }}
                />
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  )
}

export default Registration
