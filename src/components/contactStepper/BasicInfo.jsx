import InpuField from "../InpuField"

function BasicInfo() {
  return (
    <div className="grid grid-cols-2 w-full gap-4 m-8">
      <InpuField label="Full Name" name="fullName" type="text" />
      <InpuField label="Email" name="email" type="email" />
      <InpuField label="Phone no" name="phone_no" type="number" />
      <InpuField label="Institute Name" name="institute_name" type="text" />
    </div>
  )
}

export default BasicInfo
