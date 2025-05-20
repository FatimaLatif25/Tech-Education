import InpuField from "../InpuField"
import SelectField from "../SelectField"

function AddressInfo() {
  return (
    <div className="grid grid-cols-2 w-full gap-4 m-8">
      <SelectField
        label="Country"
        name="country"
        options={["Pakistan", "USA", "Italy", "Dubai"]}
      />
      <SelectField
        label="City"
        name="city"
        options={["Lahore", "Gujranwala", "Islamabad", "Karachi"]}
      />
      <InpuField label="Street" name="street" type="text" />
      <InpuField label="Postal Code" name="postal_code" type="number" />
    </div>
  )
}

export default AddressInfo
