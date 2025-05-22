import { Field } from "formik"
import { InputText } from "primereact/inputtext"
import { ErrorMessage } from "formik"

function InpuField({ label, name, type = "text", placeholder }) {
  return (
    <>
      <div className="mb-4">
        <label htmlFor={name} className="block mb-1 text-md text-blue-400">
          {label}
        </label>
        <Field name={name}>
          {({ field }) => (
            <InputText
              id={name}
              type={type}
              placeholder={placeholder}
              {...field}
              pt={{
                root: {
                  className:
                    "w-full border border-blue-400 px-4 py-2 focus:outline-none focus:ring-0 rounded-md",
                },
              }}
            />
          )}
        </Field>
        <ErrorMessage name={name} component="div" className="text-red-600" />
      </div>
    </>
  )
}

export default InpuField
