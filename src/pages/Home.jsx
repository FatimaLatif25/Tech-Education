import Navbar from "../components/Navbar"
import CourseCards from "../components/CourseCards"
import { useEffect, useState } from "react"
import axios from "axios"
import HeroImage from "../components/HeroImage"
import imageUrl from "../assets/images/heroImage.jpg"

function Home() {
  const [courses, setAllCourses] = useState([])

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
      <HeroImage imageUrl={imageUrl} title= "Welcome To Our Plateform" subtitle= "Learn anything, Learn anytime" />
      <div className="m-8">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
          {courses.map((course) => (
            <CourseCards
              key={course.id}
              title={course.title}
              subTitle={course.subTitle}
              image={course.image}
              content={course.content}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
