import HeroImage from "../components/HeroImage"
import contactImage from "../assets/images/contactImage.jpg"
import { Stepper } from "primereact/stepper"
import { StepperPanel } from "primereact/stepperpanel"
import { Button } from "primereact/button"
import { useRef, useState } from "react"
import * as Yup from "yup"
import { Formik, Form, useFormikContext } from "formik"
import BasicInfo from "../components/contactStepper/BasicInfo"
import CourseInfo from "../components/contactStepper/CourseInfo"
import AddressInfo from "../components/contactStepper/AddressInfo"
import NextButton from "../components/contactStepper/NextButton"
import FormSubmitted from "../components/contactStepper/FormSubmitted"

function Contact() {
  const stepperRef = useRef(null)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const initialValues = {
    fullName: "",
    email: "",
    phone_no: "",
    institute_name: "",
    course_name: "",
    level_of_expertise: "",
    sart_date: "",
    additional_info: "",
    country: "",
    city: "",
    street: "",
    postal_code: "",
  }

  const ValidationSchema = Yup.object({
    fullName: Yup.string().required("Full name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone_no: Yup.number()
      .min(11, "Phone no must contains 11 digits")
      .required("Phone no is required"),
    institute_name: Yup.string().required("Institute name is required"),
    course_name: Yup.string().required("Course name is required"),
    level_of_expertise: Yup.string().required("Expertise required"),
    start_date: Yup.date().required("Start date is required"),
    country: Yup.string().required("Country is required"),
    city: Yup.string().required("City is required"),
    street: Yup.string().required("Street is required"),
    postal_code: Yup.number()
      .min(4, "Postal code must contain 4 digits")
      .required("Country is required"),
  })

  const handleSubmit = (values) => {
    console.log("Value", values)
    setIsSubmitted(true)
  }

  return (
    <div>
      <div>
        <HeroImage
          imageUrl={contactImage}
          title="Get in Touch"
          subtitle="We’re here to answer your questions and help you get started"
        />
        <h1 className="font-bold text-blue-950 text-5xl text-center my-4">
          Contact Us
        </h1>
        <div className="my-[70px] mx-[50px] justify-center items-center">
          {isSubmitted ? (
            <FormSubmitted />
          ) : (
            <Formik
              initialValues={initialValues}
              validationSchema={ValidationSchema}
              onSubmit={handleSubmit}
            >
              <Form>
                <Stepper ref={stepperRef} style={{ flexBasis: "70rem" }}>
                  <StepperPanel header="Basic Info">
                    <div className="flex flex-column h-12rem mt-4">
                      <div className="border-2 border-blue-400 surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">
                        <BasicInfo />
                      </div>
                    </div>
                    <div className="flex pt-4 justify-end">
                      <NextButton stepperRef={stepperRef} currentStep={0} />
                    </div>
                  </StepperPanel>
                  <StepperPanel header="Course Info">
                    <div className="flex flex-column h-12rem mt-4">
                      <div className="border-2 border-blue-400 surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">
                        <CourseInfo />
                      </div>
                    </div>
                    <div className="flex pt-4 justify-between">
                      <Button
                        label="Back"
                        severity="secondary"
                        icon="pi pi-arrow-left"
                        onClick={() => stepperRef.current.prevCallback()}
                        pt={{
                          root: {
                            className:
                              "bg-blue-400 px-4 py-2 text-white rounded-md",
                          },
                        }}
                      />
                      <NextButton stepperRef={stepperRef} currentStep={1} />
                    </div>
                  </StepperPanel>
                  <StepperPanel header="Address Info">
                    <div className="flex flex-column h-12rem mt-4">
                      <div className="border-2 border-blue-400 surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">
                        <AddressInfo />
                      </div>
                    </div>
                    <div className="flex pt-4 justify-between">
                      <Button
                        label="Back"
                        severity="secondary"
                        icon="pi pi-arrow-left"
                        onClick={() => stepperRef.current.prevCallback()}
                        pt={{
                          root: {
                            className:
                              "bg-blue-400 px-4 py-2 text-white rounded-md",
                          },
                        }}
                      />
                      <Button
                        label="Submit"
                        type="submit"
                        pt={{
                          root: {
                            className:
                              "bg-blue-400 px-4 py-2 text-white rounded-md",
                          },
                        }}
                      />
                    </div>
                  </StepperPanel>
                </Stepper>
              </Form>
            </Formik>
          )}
        </div>
      </div>
    </div>
  )
}

export default Contact
