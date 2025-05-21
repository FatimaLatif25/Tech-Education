import { Field, ErrorMessage } from "formik";
const SelectField = ({ label, name, options = [] }) => {
  return (
    <>
      <div className="mb-4">
        <label className="block font-medium text-blue-400 mb-3">{label}</label>
        <Field
          as="Select"
          name={name}
          className="block w-full border border-blue-400 rounded px-4 py-2 focus:outline-none"
        >
          <option value={""}>Select Option</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Field>
        <ErrorMessage name={name} component="div" className="text-red-500" />
      </div>
    </>
  );
};

export default SelectField;