import { Dialog } from "primereact/dialog"
import { Button } from "primereact/button"
import { InputText } from "primereact/inputtext"

function DropdownOptionsModal({
  showModal,
  setShowModal,
  inputValues,
  setInputValues,
  onConfirm,
  onCancel,
}) {
  console.log("Input values", inputValues)
  return (
    <div className="card flex justify-content-center">
      <Dialog
        header="Dropdown Modal"
        visible={showModal}
        style={{ width: "50vw" }}
        onHide={() => {
          if (!showModal) return
          setShowModal(false)
        }}
        pt={{
          headerTitle: {
            className: "text-blue-400 m-4 p-2 text-2xl text-bold text-center",
          },
        }}
      >
        <div className="mb-4 flex justify-center items-center">
          <InputText
            value={inputValues}
            onChange={(e) => setInputValues(e.target.value)}
            label="Add Options"
            name="options"
            type="text"
            placeholder="e.g Lahore, Gujranwala, Islamabad"
            pt={{
              root: {
                className:
                  "w-full border border-blue-400 m-4 px-4 py-2 focus:outline-none focus:ring-0 rounded-md",
              },
            }}
          />
        </div>
        <div className="flex m-4 justify-center items-center gap-4">
          <Button
            label="Confirm"
            onClick={() => {
              onConfirm()
              setInputValues("")
              setShowModal(false)
            }}
            pt={{
              root: {
                className: "bg-blue-400 px-4 py-2 text-white rounded-md",
              },
            }}
          />
          <Button
            label="Cancel"
            type="button"
            onClick={() => {
              setInputValues("")
              setShowModal(false)
              onCancel()
            }}
            pt={{
              root: {
                className: "bg-red-400 px-4 py-2 text-white rounded-md",
              },
            }}
          />
        </div>
      </Dialog>
    </div>
  )
}

export default DropdownOptionsModal
