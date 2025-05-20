import InpuField from "../InpuField"
import SelectField from "../SelectField"

function CourseInfo() {
  return (
    <div className="grid grid-cols-2 w-full gap-4 m-8">
      <InpuField label="Course Name" name="course_name" type="text" />
      <SelectField
        label="Level Of Expertise"
        name="level_of_expertise"
        options={["Low", "Intermediate", "High"]}
      />
      <InpuField label="Start Date" name="start_date" type="text" />
      <InpuField
        label="Additional Information"
        name="additionL_info"
        type="text"
      />
    </div>
  )
}

export default CourseInfo
