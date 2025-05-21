import { Formik, Form, FieldArray, useFormikContext } from "formik"
import { Button } from "primereact/button"
import InpuField from "../components/InpuField"
import { Dropdown } from "primereact/dropdown"
import { useState } from "react"
import * as Yup from "yup"
import SelectField from "../components/SelectField"
import { Calendar } from "primereact/calendar"

function FieldArrayForm() {
  const [selectedType, setSelectedType] = useState([])
  const [date, setDate] = useState(null)

  const fieldType = [
    { name: "Input", value: "input" },
    { name: "Dropdown", value: "dropdown" },
    { name: "Date", value: "date" },
  ]

  const initialValues = {
    fullName: "",
    email: "",
    phone_no: "",
    company_name: "",
    addresses: [
      {
        country: "",
        city: "",
        postal_code: "",
      },
    ],
  }

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone_no: Yup.number()
      .min(11, "Phone no must have at least 11 digits")
      .required("Phone no is required"),
    company_name: Yup.string().required("Company name is required"),
    addresses: Yup.array().of(
      Yup.object().shape({
        country: Yup.string().required("Country is required"),
        city: Yup.string().required("City is required"),
        postal_code: Yup.number()
          .min(4, "Postal code must contains 4 digits")
          .required("Postal code is required"),
      })
    ),
  })

  const handleSubmit = async (values) => {
    console.log("Values", values)
  }

  const handleDelete = (index) => {
    setSelectedType((prev) => prev.filter((_, i) => i !== index))
  }
  return (
    <>
      <div className="flex justify-center items-center mt-8">
        <div className="card p-8 w-full shadow-2xl border border-blue-400 rounded-md m-8">
          <h1 className="text-xl text-center font-bold text-blue-400 mb-4 p-3 rounded-md">
            Simple Form
          </h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ values }) => (
              <Form>
                <div className="grid grid-cols-2 w-full gap-4">
                  <InpuField label="Full Name" name="fullName" type="text" />
                  <InpuField label="Email" name="email" type="email" />
                  <InpuField label="Phone no" name="phone_no" type="number" />
                  <InpuField
                    label="Company Name"
                    name="company_name"
                    type="text"
                  />
                </div>
                <FieldArray name="addresses">
                  {({ push, remove }) => (
                    <div>
                      <label className="block mb-1 text-lg font-bold text-blue-400">
                        Address
                      </label>
                      {values.addresses.map((_, index) => (
                        <div key={index} className="grid grid-cols-4 gap-4">
                          <InpuField
                            label="Country"
                            name={`addresses[${index}].country`}
                            type="text"
                          />
                          <InpuField
                            label="City"
                            name={`addresses[${index}].city`}
                            type="text"
                          />
                          <InpuField
                            label="Postal code"
                            name={`addresses[${index}].postal_code`}
                            type="number"
                          />
                          <div className="flex justify-start items-center gap-2 mt-3 ml-3">
                            <Button
                              label="Add"
                              type="button"
                              onClick={() =>
                                push({ country: "", city: "", postal_code: "" })
                              }
                              pt={{
                                root: {
                                  className:
                                    "bg-blue-400 px-4 py-2 text-white rounded-md",
                                },
                              }}
                            />

                            {index > 0 && (
                              <Button
                                label="Delete"
                                type="button"
                                onClick={() => remove(index)}
                                pt={{
                                  root: {
                                    className:
                                      "bg-red-500 px-4 py-2 text-white rounded-md ml-4",
                                  },
                                }}
                              />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </FieldArray>
                <div className="mb-4">
                  <label className="block mb-1 text-lg font-bold text-blue-400">
                    Select Field Type
                  </label>
                  <Dropdown
                    value={selectedType}
                    onChange={(e) =>
                      setSelectedType((prev) => [...prev, e.value])
                    }
                    options={fieldType}
                    optionLabel="name"
                    optionValue="value"
                    placeholder="Select a field Type"
                    pt={{
                      root: {
                        className:
                          "border border-blue-400 px-4 py-2 focus:outline-none focus:ring-0 rounded-md",
                      },
                    }}
                  />
                </div>
                {selectedType.map((field, index) => (
                  <div key={index} className="mt-4">
                    {field == "input" && (
                      <InpuField
                        name={`input_${index}`}
                        label={`Input ${index + 1}`}
                      />
                    )}
                    {field == "dropdown" && (
                      <SelectField
                        name={`Dropdown ${index}`}
                        label={`Dropdown_${index + 1}`}
                      />
                    )}
                    {field == "date" && (
                      <>
                        <label className="block font-medium text-blue-400 mb-3">
                          Date
                        </label>
                        <Calendar
                          value={date}
                          onChange={(e) => setDate(e.value)}
                          pt={{
                            root: {
                              className:
                                "w-full border border-blue-400 px-4 py-2 focus:outline-none focus:ring-0 rounded-md mb-4",
                            },
                          }}
                          showIcon
                        />
                      </>
                    )}
                    <Button
                      label="Delete"
                      type="button"
                      onClick={() => handleDelete(index)}
                      pt={{
                        root: {
                          className:
                            "bg-red-500 px-4 py-2 text-white rounded-md ml-4 mb-2",
                        },
                      }}
                    />
                  </div>
                ))}
                <Button
                  label="Submit"
                  type="submit"
                  pt={{
                    root: {
                      className: "bg-blue-400 px-4 py-2 text-white rounded-md",
                    },
                  }}
                />
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  )
}

export default FieldArrayForm
