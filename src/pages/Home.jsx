import CourseCards from "../components/CourseCards"
import { useEffect, useState } from "react"
import axios from "axios"
import { Paginator } from "primereact/paginator"
import HeroImage from "../components/HeroImage"
import imageUrl from "../assets/images/heroImage.jpg"

function Home() {
  const [courses, setAllCourses] = useState([])
  const [first, setFirst] = useState(0)
  const [rows, setRows] = useState(10)
  const [currentPage, setCurrentPage] = useState([])

  const onPageChange = (event) => {
    setFirst(event.first)
    setRows(event.rows)
  }

  useEffect(() => {
    const coursePerPage = courses.slice(first, first + rows)
    setCurrentPage(coursePerPage)
  }, [courses, first, rows])

  const getAllCourses = async () => {
    try {
      const response = await axios.get("http://localhost:5000/courses")
      setAllCourses(response.data)
      console.log("response", response)
    } catch (error) {
      alert("No course")
    }
  }

  useEffect(() => {
    getAllCourses()
  }, [])

  return (
    <div>
      <HeroImage
        imageUrl={imageUrl}
        title="Welcome To Our Plateform"
        subtitle="Learn anything, Learn anytime"
      />
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3 mx-4">
        {currentPage.map((course) => (
          <CourseCards
            key={course.id}
            title={course.title}
            subTitle={course.subTitle}
            image={course.image}
            content={course.content}
          />
        ))}
      </div>
      <div className="my-6">
        <Paginator
          first={first}
          rows={rows}
          totalRecords={courses.length}
          rowsPerPageOptions={[10, 20, 30]}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  )
}

export default Home
