import { useFormikContext } from "formik"
import { Button } from "primereact/button"

const stepFields = [
  ["fullName", "email", "phone_no"],
  [
    "institute_name",
    "course_name",
    "level_of_expertise",
    "start_date",
    "additional_info",
  ],
  ["country", "city", "street", "postal_code"],
]

const NextButton = ({ stepperRef, currentStep }) => {
  const { validateForm, setTouched } = useFormikContext()

  const handleNext = async () => {
    const errors = await validateForm()

    const currentStepErrors = Object.keys(errors).filter((key) =>
      stepFields[currentStep].includes(key)
    )

    setTouched(
      stepFields[currentStep].reduce((acc, key) => {
        acc[key] = true
        return acc
      }, {})
    )

    if (currentStepErrors.length === 0) {
      stepperRef.current.nextCallback()
    }
  }

  return (
    <Button
      label="Next"
      icon="pi pi-arrow-right"
      iconPos="right"
      onClick={handleNext}
      pt={{
        root: {
          className: "bg-blue-400 px-4 py-2 text-white rounded-md",
        },
      }}
    />
  )
}

export default NextButton
