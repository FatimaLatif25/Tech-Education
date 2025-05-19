import { Card } from "primereact/card"
function CourseCards( { title, subTitle, image, content }) {

  const header = (
    <img src={image} alt={title} className="w-full h-48 object-cover rounded-md overflow-hidden"/>
  )
  return (
    <div className="">
      <Card title= {title} subTitle={subTitle} header={header} 

      pt={{
        root: {
          className: "p-4 shadow-2xl border border-gray-500 h-full"
        },
        title: {
          className: "mt-2 py-1 text-2xl"
        },
        subTitle: {
          className: "my-2 text-lg"
        }
      }}>
        <p className="m-0 ">
         {content}
        </p>
      </Card>
    </div>
  )
}

export default CourseCards
